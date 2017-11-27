# 12- Deployment

## Install Now

```
sudo npm i -g --unsafe-perm now
```


## Deploy w/ now

!! Use the proper D-NAME !!!

```
now -e UNSPLASH_CLIENT_ID=9beb44d6306dfb09b76b231d7ead9a5743e9de27d3cc3289371222fdca5a2c35 -e UNSPLASH_BASE_URL=https://api.unsplash.com/ -e DB_URI=mongodb://admin:admin@ds261745.mlab.com:61745/test-codelytv -e PORT=8080
```

GET https://server-proxy-api-unsplash-hyyqdbqqtv.now.sh/search/surf

POST https://server-proxy-api-unsplash-hyyqdbqqtv.now.sh/favorites
HEADER → {user_id:twitter|61481865}

