// apiService.js
import axios from 'axios';

const apiService = axios.create({
    baseURL: '/api', // 예시 URL, 실제로 사용할 URL로 변경하세요.
    timeout: 5000, // 요청이 5초 이내로 완료되지 않으면 타임아웃
});

export default apiService;

export const handleResponse = async (request,func) => {
    try {
        const response = await request(); // 비동기적으로 호출
        window[func](response);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const axiosCall = async (url, callbackFun) => {
    try {
        const response = await handleResponse(async () => {
            const result = await apiService.get(url);
            return result;
        }, callbackFun);

        // 페이지 1에서 필요한 작업 수행
    } catch (error) {
        console.error(error); // 오류 처리
    }
};




