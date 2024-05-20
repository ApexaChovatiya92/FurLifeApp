import axios from "axios";
import { getToken } from "../redux/selectors";
import NavigationService from "../navigation/NavigationService";
import { SCREENS } from "../constant";
import Modal from "../components/modal";
import { common_strings } from "../constant/strings";

const APIInstance = (loader = true, isMultipart = false) => {
  // Create axios client, pre-configured
  loader && Modal.createProgressModal(common_strings.loading, false);
  const APIKit = axios.create({
    timeout: 30000,
  });

  const responseHandler = (response) => {
    loader && Modal.hideAll();
    if (response.status === 401) {
      return Promise.reject(response);
    }
    return response;
  };

  const errorHandler = async (error) => {
    loader && Modal.hideAll();
    // Modal.alert(error.toJSON().message || "error occured");
    if (error.toJSON().message === "Network Error") {
      try {
        NavigationService.navigate(SCREENS.NOINTERNET);
      } catch (e) {
        alert("Unable to logout");
      }
    }
    if (error.toJSON().status === 401) {
      NavigationService.navigateAndReset(SCREENS.COMMONSTACK, {
        screen: SCREENS.LOGIN,
      });
    }

    return Promise.reject(error);
  };

  APIKit.interceptors.request.use(function (config) {
    let { userData } = getToken();
    let { token } = userData;

    if (Boolean(token)) {
      config.headers["Authorization"] = `Bearer ${token || ""}`;
    }
    config.headers["Content-Type"] = isMultipart
      ? "multipart/form-data"
      : "application/json";

    return config;
  });

  APIKit.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
  );
  return APIKit;
};
export default APIInstance;
