const { google } = require('googleapis');

const fl = require('./key.json')
const private_key =  "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDGtIRB2rIabVLh\n2dktxEar0xBqvuPE0JTiueM4Kq6IYNVtzmS/o+1/Sp7NuUjhOV2R4I64B2P/tyOn\nHcznVSNXTSH+zbyFCoCto1nVAX/TxWjLs1SfVQHU3jn8IjYptNFv1EQPgKVn/R5u\nhpTbaFu2Km/vr187auEqjG5cAEBcfPesP5CzAjcaUklemy9XslQQAE3XlVOXeiSz\nvqDLBGVIDg+6o09Xsz76xPf2SEgg/OIbnyX3nT4EpS27J5XFGCTGk0RMXHahgV4m\nPaIgu0sVwMmez3r1qIXJbh+xpzNug1BVcn6XGB+HB6CAlRGWZ5SmyGvX4HHtRNXS\ndW5POa+VAgMBAAECggEAAZnXVe2cbkExm4yOXUdQDAjSWdqQ2bFyYsJ3fNJieBHw\nlqYbLEFP4kqwhsOoct9aK4ccOU6PzCMOsoyrc5E6VwnL8FhWeFajBZxsu9DF56ZP\nmEgXQU+dQazNnhkm4oR8sSt6NLe5EYkRo2WiJJttsA+Cxb1v3UpLUkVkc1miqCOJ\nPDB3LXajtQAHBat+ekvayASxBrDiMS5gIJg1jDLuVFiQtzDw80vPjpIg76GEwRUK\nTdG/GBioBPRvyVvu4+U5kGh19PPMZ6+FzaxAQYay34LF7Trn+P9mTSmjGufTeoK0\nggFk9gcI0jfeTg8JZXy672Ge4XrpRgtaJslnAVRSJQKBgQDsxaPbM7YnttRGcww1\npuluHy+TJHu125Pk7Ic+71mdU2Zhpr5ZfurtWk6hyM5L5+P862Ubj0quAM7VNC19\nHrV4M7oAQWUIL0hrUp0kfylwHnTOiFkfZ7+aUNyRnlVZxtKJEfS1vPB14hFDGB0L\nGNJI+i13adz1MQ8v139j/WYIdwKBgQDW13yo9cM2C40zCs+LLDWepHrCDqQQE6Mj\nFiAHw6ULkryzXvvEzy3gdz8dHlEPz0dxcGzJWQfPLLa4fJq/EAWftNS201R91rT5\nSF1tbJZ0Iy6Ci2upKXue/YUZ/rskXpKwB+HpeCSiqqkDL8gJtZHvEDLwfbJTJtx9\n5dhRlX/XUwKBgQDE4Sb6G8rIxTdICVxKtKr/3cCyirCvrJES1zcyttX+gx3r7zny\nsx1oFiKyVoZsCbvDUH13aDRB8fwKvuNgWgutkt2EXtxC7QY776spcO+lAj5AipIJ\nEjz5dWmjUFRKXZAtWBfyktQkQcH213M3CgG5mwX5eLa5z3yAXKHaJBgWywKBgQCy\nT0zGiptHatT5LRrOPpYOIiNElpQyR6oZf857wzRjY5k8IjRBx1YjO7VlPHk47ucz\nzoRrpHnnyAurGLfypaCVSadWShWRD7dKQnZQUFSa9Wwvqvli/+v7LBzhU1sNN3T1\npsUoWa/GVnBKFcknzcveJ4qvsRNlEhbkYvRj2fmtwwKBgBTuhogIRP0zVcNq8JZD\n6FaECXQleOrKaQ9WHNv5lOL2OPiBnOxs2kOKS2e3A0JDqSJ2r2GMvwaosCuh/teW\ny88Zvfm6tX4LhFnHyae01BsefaveG8cc64zE2bssr2B4v3bsbqJIQdVAadW9bnCu\nGgqMCYYnaUYlajMOMotYJEVA\n-----END PRIVATE KEY-----\n"

const auth = new google.auth.GoogleAuth({
  credentials:{
    client_email : "trendsme@trends-403414.iam.gserviceaccount.com",
    private_key : private_key.split(String.raw`\n`).join('\n'),

  },
  keyFile: fl,
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
});

export async function accessGoogleSheet() {
    try {
      const client = await auth.getClient();
      const sheets = google.sheets({ version: 'v4', auth: client });
  
      const spreadsheetId = '10OPcUhBnty8e5pxDd9hgkn4DSvWgb8bVNQoxImcNqBo';
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'Sheet1', // Specify the range you want to fetch (e.g., 'Sheet1' or 'A1:Z1000')
      });
  
      if (response.data && response.data.values) {
        return response.data.values;
      } else {
        throw new Error('No data found in the Google Sheet');
      }
    } catch (err) {
      console.error('Error accessing Google Sheet:', err);
      throw err;
    }
  }


