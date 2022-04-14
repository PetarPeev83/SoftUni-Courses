import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getMostRecentGames() {
    return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category');
};


export async function getAllGames() {
    return api.get('/data/games?sortBy=_createdOn%20desc');
};

export async function createGame(game) {
    return api.post('/data/games', game);
};

export async function getGameById(id) {
    return api.get('/data/games/' + id);
};

export async function editGame(id, game) {
    return api.put('/data/games/' + id, game);
};

export async function deleteGame(id) {
    return api.del('/data/games/' + id);
};

// export async function getMyBooks(userId) {
//     return api.get(`/data/games?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
// };

// //   comments:


export async function getCommentsByBookId(gameId) {
    return api.get(`/data/comments?where=gameId%3D%22${gameId}%22`);
};

export async function createComment(gameId, comment) {
    return api.post('/data/comments', { gameId, comment });
};

// export async function getMyLikeByBookId(bookId, userId) {
//     return api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
// };

// //EXTRA SEARCH!!!
// export async function searchBooks(query) {
//     return api.get('/data/games?where=' + encodeURIComponent(`title LIKE "${query}"`));
// };