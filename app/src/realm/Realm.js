import Realm from 'realm'

export const realm = new Realm({
    schema: [

    ],
    schemaVersion: 0
});

export const convertRealmArray = (results) => {
    return results.map(x => Object.assign({}, x))
}
