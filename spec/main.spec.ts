import { Dropbox } from "../dropbox/dropbox";
import { dropboxDir, fileName, localDir, token } from "../dropbox/constants";

describe("dropbox testing", () => {
  let dropbox;

  beforeAll(() => {
    dropbox = new Dropbox(token);
  }, 10000);

  it("should upload file", (done) => {
    dropbox.uploadFile(done, fileName, localDir, dropboxDir);
  }, 10000);

  it("get_metadata", (done) => {
    dropbox.getFileMetadata(done, fileName, dropboxDir);
  }, 10000);

  it("delete", (done) => {
    dropbox.deleteFile(done, fileName, dropboxDir);
  }, 10000);
});
