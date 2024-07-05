import * as request from '~/utils/request';

const PATH_SERVICE = 'users/search';

const search = async (q, type = 'less') => {
    try {
        const result = await request.get(PATH_SERVICE, {
            params: {
                q,
                type,
            },
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

export default search;
