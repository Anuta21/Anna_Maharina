import { Dropbox } from "../dropbox/dropbox";
import { dropboxDir, fileName, localDir, token } from "../dropbox/constants";

describe("dropbox testing", () => {
  let dropbox;

  beforeAll(() => {
    dropbox = new Dropbox(token);
  });

  it("should upload file", (done) => {
    dropbox.uploadFile(done, fileName, localDir, dropboxDir);
  });

  it("get_metadata", (done) => {
    dropbox.getFileMetadata(done, fileName, dropboxDir);
  });

  it("delete", (done) => {
    dropbox.deleteFile(done, fileName, dropboxDir);
  });
});
