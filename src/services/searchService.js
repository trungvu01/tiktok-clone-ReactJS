import { httpRequest } from '~/utils';

const PATH_SERVICE = 'users/search';

const searchService = async (q, type = 'less') => {
    try {
        const result = await httpRequest.get(PATH_SERVICE, {
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

export default searchService;
