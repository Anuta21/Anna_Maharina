import dropboxV2Api from "dropbox-v2-api";
import fs from "fs";

export class Dropbox {
  dropbox;
  constructor(token: string) {
    this.dropbox = dropboxV2Api.authenticate({ token });
  }

  uploadFile(
    done: DoneFn,
    fileName: string,
    localDir: string,
    dropboxDir: string
  ) {
    const dropboxPath = `/${dropboxDir}/${fileName}`;
    this.dropbox(
      {
        resource: "files/upload",
        parameters: {
          path: dropboxPath,
        },
        readStream: fs.createReadStream(`${localDir}/${fileName}`),
      },
      (error: { [key: string]: any }, result: { [key: string]: any }) => {
        if (error) {
          throw error;
        }
        expect(result.name).toBe(fileName);
        expect(result.path_display).toBe(dropboxPath);
        done();
      }
    );
  }

  getFileMetadata(done: DoneFn, fileName: string, dropboxDir: string) {
    const dropboxPath = `/${dropboxDir}/${fileName}`;
    this.dropbox(
      {
        resource: "files/get_metadata",
        parameters: {
          path: dropboxPath,
        },
      },
      (error: { [key: string]: any }, result: { [key: string]: any }) => {
        if (error) {
          throw error;
        }
        expect(result.name).toBe(fileName);
        expect(result.path_display).toBe(dropboxPath);
        expect(result[".tag"]).toBe("file");
        done();
      }
    );
  }

  deleteFile(done: DoneFn, fileName: string, dropboxDir: string) {
    const dropboxPath = `/${dropboxDir}/${fileName}`;
    this.dropbox(
      {
        resource: "files/delete_v2",
        parameters: {
          path: dropboxPath,
        },
      },
      (error: { [key: string]: any }, result: { [key: string]: any }) => {
        if (error) {
          throw error;
        }
        expect(result.metadata.name).toBe(fileName);
        expect(result.metadata.path_display).toBe(dropboxPath);
        expect(result.metadata[".tag"]).toBe("file");
        done();
      }
    );
  }
}
