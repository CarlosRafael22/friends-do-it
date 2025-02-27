"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { CreatePlanBody } from "@/src/entities/models/plan";
import getAllPlansController from "@/src/interface-adapters/controllers/plans/getAllPlans.controller";
import createPlanController from "@/src/interface-adapters/controllers/plans/createPlan.controller";
import { SuccessfulResponse } from "@/src/entities/models/request";
import { GenericError } from "@/src/entities/models/error";
import markPlanAsDoneController from "@/src/interface-adapters/controllers/plans/markPlanAsDone.controller";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  // Move it to the client validation
  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
    // return { error: error.message };
  } else {
    // return { success: "Thanks for signing up! Please check your email for a verification link." };
    return encodedRedirect(
      "success",
      "/sign-up",
      "Thanks for signing up! Please check your email for a verification link.",
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};

export const getPlansAction = async () => {
  return await getAllPlansController();
};

export const createPlanAction = async ({ title, date, time }: CreatePlanBody) => {
  return await createPlanController({ title, date, time });
};

export type ServerActionState = {
  error?: string;
}

export const createPlanActionFormState = async (prevState: ServerActionState, { title, date, time }: CreatePlanBody) => {
  const response = await createPlanAction({ title, date, time });
  if ((response as SuccessfulResponse)?.success) return { error: (response as GenericError).message };
  return { error: undefined };
};

export const markPlanAsDoneAction = async (id: number) => {
  return await markPlanAsDoneController(+id);
};

export const markPlanAsDoneActionFormState = async (prevState: ServerActionState, id: number) => {
  const response = await markPlanAsDoneAction(id);
  if ((response as SuccessfulResponse)?.success) return { error: (response as GenericError).message };
  return { error: undefined };
};
