import API from "./index";

export function getUserProfile(payload) {
    console.log(payload)
    return API({
        method: "GET",
        url: `/v1/users/${payload.userId}`,
    });
}

export function getUserFollowers(payload) {
    console.log(payload)
    return API({
        method: "GET",
        url: `/v1/users/followers/${payload.userId}`,
    });
}

export function getUserFollowing(payload) {
    console.log(payload)
    return API({
        method: "GET",
        url: `/v1/users/following/${payload.userId}`,
    });
}