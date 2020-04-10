
import httpHandler from '../../../core/src/base-handler';

export const index = httpHandler(async(event) => {
  console.log("Inside template endpoint!", JSON.parse(event.body));

  return {
    statusCode: 200,
    data: { msg: "Success" }
  }
}); // END index