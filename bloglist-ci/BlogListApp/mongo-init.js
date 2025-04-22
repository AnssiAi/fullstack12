db.createUser({
    user: 'blog_username',
    pwd: 'blog_password',
    roles: [
      {
        role: 'dbOwner',
        db: 'blog_database',
      },
    ],
  });

db.createCollection('users');
db.createCollection('blogs');