import api from '../ax/axiosSetting';

/**
 * 게시글 등록
 * @param {Object} postData - 게시글 데이터 (예: { title, content, author })
 * @returns {Promise}
 */
export const createPost = (postData) => {
    return api.post('/board/regist', JSON.stringify(postData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

/**
 * 게시글 목록 조회
 * @returns {Promise}
 */
export const getPosts = () => {
    return api.get('/board/list');
};

/**
 * 게시글 상세 조회
 * @param {number} id - 게시글 ID
 * @returns {Promise}
 */
export const getPostDetail = (id) => {
    return api.get(`/board/detail/${id}`);
};

/**
 * 게시글 수정
 * @param {Object} postData - 수정할 데이터 (예: { id, title, content })
 * @returns {Promise}
 */
export const updatePost = (postData) => {
    return api.post('/board/update', JSON.stringify(postData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

/**
 * 게시글 삭제
 * @param {number} id - 삭제할 게시글 ID
 * @returns {Promise}
 */
export const deletePost = (id) => {
    return api.delete(`/board/delete/${id}`);
};

/**
 * 게시글 추천
 * @param {number} id - 추천할 게시글 ID
 * @returns {Promise}
 */
export const recommendPost = (id) => {
    return api.post(`/board/recommend/${id}`);
};
