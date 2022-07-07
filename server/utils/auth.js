const jwt = require('jsonwebtoken');
//shhh a secret
const secret = 'mysecretsshh';
//expiration time
const expire = '1h';

module.exports = {
    signToken: function({username,email,_id}){
        const payload = {username,email,_id};

        return jwt.sign({data:payload},secret,{expiresIn:expire});
    },

    authMiddleware: function({req}){
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token|| req.query.token|| req.headers.authorization;
        // separate "Bearer" from "<tokenvalue>"
        if (req.headers.authorization) {
            token = token
              .split(' ')
              .pop()
              .trim();
          }
        
          // when no token is availble, return request object 
          if (!token) {
            return req;
          }
        
          try {
            // decode & attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
          } catch {
            console.log('Invalid token');
          }
        
          // return new request object
          return req;
        }
        
      };