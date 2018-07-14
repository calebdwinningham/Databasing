REM installs the node packages
call npm install

REM makes commands visible
ECHO ON

REM creates mongo database and loads the data with the seed file provided
mongoimport --db soracle --collection users --type json --jsonArray --file server/users-seed.json --jsonArray --drop
mongoimport --db soracle --collection posts --type json --jsonArray --file server/tweets-seed.json --jsonArray --drop