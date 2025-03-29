import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service {
    client = new Client();
    databases;
    bucket; //BUCKET FOR STORAGE

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, // ✅ Fixed typo
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("AppwriteService error: :: createPost :: error ", error);
            ;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("AppwriteService :: updatePost :: error : ", error);
            
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("AppwriteService error:  :: deletePost :: error ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument( // ✅ Fixed incorrect `Databases` reference
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("AppwriteService :: getPost :: error ", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments( // ✅ Fixed incorrect `Databases` reference
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            );
        } catch (error) {
            console.log("AppwriteService :: getPosts :: error ", error);
            return false;
        }
    }
//file sevices
    async uploadFile(file) {
        try {
            return await this.bucket.createFile( // ✅ Added `await`
                conf.appwriteBucketId,
                ID.unique(),
                file,
            );
        } catch (error) {
            console.log("AppwriteService :: uploadFile :: error ", error);
            return false;
        }
    }

    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId, fileID);
            return true; // ✅ Added `return true`
        } catch (error) {
            console.error("AppwriteService  :: deleteFile :: error ", error);
            return false;
        }
    }

    getFilePreview(fileID) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId, fileID
        );
    }
}

const service = new Service();
export default service;
 