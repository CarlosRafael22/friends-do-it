type ModalProps = {
    title: string;
    onSubmit: (e: React.FormEvent) => void;
    onClose: () => void;
    submitText: string;
    children: React.ReactNode
}

const Modal = ({ children, title, onSubmit, onClose, submitText }: ModalProps) => {

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
        onClick={handleOverlayClick}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">{title}</h3>
          <form onSubmit={onSubmit} className="mt-2">
            <div>{children}</div>
            <div className="flex items-center justify-between mt-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {submitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;