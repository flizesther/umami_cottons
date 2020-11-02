// StorageService is storage data service of Firebase

// Fix Firebase SDK in Node
global.XMLHttpRequest = require("xhr2");

// Firebase App (the core Firebase SDK) is always required
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/storage");

export class StorageService {

    constructor(config) {

        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }

        this.storage = firebase.storage()
    }

    async getFile(path) {

        var storageRef = this.storage.ref();
        var file = storageRef.child('/' + path);

        const data = await this._getFile(file, { url: true, meta: true })

        return this._success(200, data);
    }

    async getAll() {
        const data = await this._getAll('')

        return this._success(200, data);
    }

    async get(type, path) {

        var storageRef = this.storage.ref();
        var listRef = storageRef.child('/' + path);

        const response = await listRef.listAll();

        const folders = type == 'all' || type == 'folder' ? response.prefixes.map(async folder => {
            return await this._getFolder(folder)
        }) : [];

        const files = type == 'all' || type == 'file' ? response.items.map(async file => {
            return await this._getFile(file, {})
        }) : [];

        const data = await Promise.all(folders.concat(files));

        return this._success(200, data);
    }

    async _getFolder(folder) {
        return {
            name: folder.name || '',
            fullPath: folder.fullPath || '',
            type: 'folder',
        };
    }

    async _getFile(file, { url = false, meta = false }) {

        const data = {
            name: file.name || '',
            fullPath: file.fullPath || '',
            type: 'file'
        };

        const downloadUrl = url ? { url: await file.getDownloadURL() } : {}
        let metadata = meta ? await file.getMetadata() : {}

        if (meta) {
            metadata = {
                size: metadata.size || 0,
                contentType: metadata.contentType || '',
                created: metadata.timeCreated || '',
                updated: metadata.updated || '',
            }
        }

        return {
            ...data,
            ...metadata,
            ...downloadUrl
        };
    }

    async _getAll(path) {

        var storageRef = this.storage.ref();
        var listRef = storageRef.child('/' + path);

        const response = await listRef.listAll();

        const folders = response.prefixes.map(async folder => {
            return await this._getAll(folder.fullPath)
        });

        const files = response.items.map(async file => {
            return await this._getFile(file, { url: true })
        });

        const list = await Promise.all(folders.concat(files));
        return list.flat();
    }

    _success(status, data) {
        return {
            status: status,
            data: data
        }
    }

}