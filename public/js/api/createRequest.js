/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    if (options) {
        const xhr = new XMLHttpRequest;
        let formData = new FormData();
        if (options.method !== `GET`) {
            Object.entries(options.data).forEach(([key, value]) => formData.append(key, value));
        } else {
            formData = ``;
            if (!options.url.includes(`/account`)) {
                options.url += `?`;
                Object.entries(options.data).forEach(([key, value]) => options.url += `${key}=${value}&`);
                options.url = options.url.slice(0, -1);
            }
        }
        try {
            xhr.open(options.method, options.url);
            xhr.send(formData);
        } catch (err) {
            options.callback(err, null);
        }
        xhr.responseType = `json`;
        xhr.addEventListener(`readystatechange`, function () {
            if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
                options.callback(null, xhr.response);
            }
        });
    }
}