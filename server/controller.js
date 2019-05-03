module.exports = {
    login: (req, res) => {
        const db = req.app.get('db');
        db.getUser(req.body.username)
        .then(async users => {
            if(!users.length){
                res.status(401).json({error: 'Please register'})
            }else{
                if(await bcrypt.compare(req.body.password, users[0].password)){
                    req.session.user = {
                        id: users[0].id,
                        username: user[0].username,
                        email: users[0].email
                    }
                    res.json({
                        id: users[0].id, 
                        username: users[0].username,
                        password: users[0].password,
                        email: users[0].email
                     })
                }else{
                    res.status(401).json({error: 'Incorrect email or password, please try again'})
                }
            }
        })
    },

    register: async (req, res) => {
      const db = req.app.get('db');
      const hash = await bcrypt.hash(req.body.password, 10)
      try{
        const response = await db.adduser([req.body.username, hash, req.body.email]);
        req.session.user = {
          id: response[0].id,
          username: response[0].username,
          email: response[0].email
        }
        res.json(response[0])
      }catch(e){
        console.log(e);
        res.status(401).json('Error, please try again')
      }
    },

    edit: async (req, res) => {
      const db = req.app.get('db');
      const hash = await bcrypt.hash(req.body.passwrord, 10)
      try{
        const response = await db.updateUser([req.session.user.id, req.body.username, hash, req.body.email]);
        req.session.user = {
          id: response[0].id,
          username: response[0].username,
          email: response[0].email
        }
        res.json(response[0])
      }catch(e){
        res.status(401).json('Error, please try again')
      }
    },

    user: (req, res) => {
      const db = req.app.get('db');
      db.getUser(req.session.user.id)
      .then(user => {
        res.status(200).json({id: user[0].id, username: user[0].username, email: user[0].email})
      })
    },

    delete: (req, res) => {
      const db = req.app.get('db');
      db.deleteUser(+req.params.id)
      .then(() => {res.sendStatus(200)})
    },

    logout: (req, res) =>{
      req.session.destroy
    },

    hole: (req, res) => {
      const db = req.app.get('db');
      db.getHole({hole_id: req.body.hole_id, word: req.body.word})
    },

    //compare word vs input on front end, if word "" === input "" points based on word.length

    totalPoints: (req, res) => {
      const db = req.app.get('db');
      db.totalPoints([req.body.points, req.body.id])
    }

}