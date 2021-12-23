import Hub from '../../models/hub/Hub';

const getHubList = async () => {
    const returningList = await Hub.find({}).exec();

    return returningList;
};

export default getHubList;
