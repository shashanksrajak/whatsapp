import API from "./index";
import { useQuery, useMutation } from "react-query";

export function getProjects(payload) {
    console.log(payload)
    return useQuery(
        ["projects-list", payload.page],
        async () => {
            const response = await API({
                method: "GET",
                url: `/v1/projects?limit=${payload.rowsPerPage}&offset=${payload.rowsPerPage * (payload.page)}`,
                params: payload.params
            });
            return response.data;
        },
        {
            keepPreviousData: true,
        }
    );
}

export function addProject() {
    return useMutation(
        async (payload) => {
            const response = await API({
                method: "POST",
                url: `/v1/projects`,
                data: payload,
            });
            return response.data;
        }
    )
}