import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAllAlbums() {
    return api.get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
};

export async function createAlbum(album) {
    return api.post('/data/albums', album);
};

export async function getAlbumById(id) {
    return api.get('/data/albums/' + id);
};

export async function editAlbum(id, album) {
    return api.put('/data/albums/' + id, album);
};

export async function deleteAlbum(id) {
    return api.del('/data/albums/' + id);
};

// EXTRA SEARCH!!!
export async function searchAlbum(query) {
    return api.get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
};

// export async function getMyBooks(userId) {
//     return api.get(`/data/games?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
// };

// //   comments:


// export async function getCommentsByBookId(gameId) {
//     return api.get(`/data/comments?where=gameId%3D%22${gameId}%22`);
// };

// export async function createComment(gameId, comment) {
//     return api.post('/data/comments', { gameId, comment });
// };

// export async function getMyLikeByBookId(bookId, userId) {
//     return api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
// };
