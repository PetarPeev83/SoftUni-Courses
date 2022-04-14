import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    topics: `/data/topics?select=_id,title,_ownerId&load=${encodeURIComponent('author=_ownerId:users')}`,
    createTopic: '/data/topics',
    topicCount: '/data/topics?count',
    topicById: (id) => `/data/topics/${id}?load=${encodeURIComponent('author=_ownerId:users')}`,
    commentsByTopicId: (topicId) => `/data/topicComments/?where=` + encodeURIComponent(`topicId="${topicId}"`) + `&load=${encodeURIComponent('author=_ownerId:users')}`,
    createComment: '/data/topicComments',
};

export function getAllTopics() {
    return api.get(endpoints.topics);
};
export async function createTopic(topic) {
    return api.post(endpoints.createTopic, topic);
};

export async function getTopicCount() {
    return api.get(endpoints.topicCount);
};

export async function getTopicById(id) {
    return api.get(endpoints.topicById(id));
};

export function getCommentsByTopicId(topicId) {
    return api.get(endpoints.commentsByTopicId(topicId));
};

export async function createComment(comment) {
    return api.post(endpoints.createComment, comment);
};
