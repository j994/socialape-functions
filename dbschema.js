let db = {
    users: [
        {
            userId: 'ndfsnudfsn',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2019-03-15T10:59:52.798Z',
            imageUrl: 'image/nsoanndfon',
            bio: 'this is the bio',
            website: 'https://user.com',
            location: 'Brussels, BE'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2019-03-15T11',
            likeCount: 5,
            commentCount: 2
        }
    ]
};

const userDetails = {
    credentials: {
        userId: '',
        email: '',
        handle: '',
        createdAt: '',
        imageUrl: '',
        bio: '',
        website: '',
        location: ''
    },
    likes: [
        {
            userHandle: '',
            screamId: '',
        },
        {
            userHandle: '',
            screamId: ''
        }
    ]
}