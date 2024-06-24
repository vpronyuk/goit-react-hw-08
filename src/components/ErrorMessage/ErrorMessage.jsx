import { toast } from "react-hot-toast";

const notify = () =>
  toast.error("Something goes wrong.. Please reload the page!");

const ErrorMessage = () => {
  return { notify };
};

export default ErrorMessage;
