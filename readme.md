

seed: npx prisma db seed

yarn run prisma migrate dev --name init

Notes:
For the Supabase/Prisma combo, it is best to just use migrate dev to deploy changes to the Supabase db. This is a manual process of deploying db schemas to the working db. 

Unless I have a CICD pipeline in place, I shouldn't be using migrate deploy. 