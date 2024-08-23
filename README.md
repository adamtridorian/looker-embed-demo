## Getting Started

```bash
npm install
# then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Looker UI Demo
Embed Secret: generated from Looker project
Host: domain/URL
Embed Path: path to dashboard with `/embed/` in front
External User ID: can be any string, but tied to each user and recommended to use the UID from your existing authentication method 
First/Last Name: not necessary for creating a signed embedding URL, but can be derived by the existing authentication as well
Permissions: a lot of permissions (can differentiate based on UID, for example, for a client that pays more they can query and edit, while another non paying client may just be able to view) - some permissions are dependent on others: https://cloud.google.com/looker/docs/signed-embedding#permissions
Models: name of your LookML models
Session Length: integer

See more in `@/utils/signedEmbed.ts`
Google provides examples of generating this link depending on your backend language. I converted JS to TS here but you can see other implementations here: https://github.com/looker/looker_embed_sso_examples

Ideally, all of this link generation would be handled on the backend with the secret in a secret environment variable, away from client. The user ID, names, embed URL and host can all be derived or are known and we can adjust permissions based on client. This Signed URL Tool is just a UI show of how the backend works.
