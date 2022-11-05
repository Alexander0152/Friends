import { AxiosError } from 'axios';

type ResponseError = AxiosError & {
    config: {
        _retry?: boolean
    }
};

export default {
    async handleError(error: ResponseError) {
        const status = error.response?.status;

        if (!status) {
            if (error.request && error.request.status === 0) {
                //do something
            }
            return;
        }

        if (status == 401) {
            //do something
            return;
        }

        if (status == 403) {
            //do something
            return;
        }

        if (status >= 400 && status < 500) {
            //do something
            return;
        }

        if (status >= 500) {
            //do something
            return;
        }
    }
}
