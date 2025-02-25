export type QueryResponse<DataType, ErrorType> = {
    data: DataType[] | null;
    error: ErrorType | null;
};
