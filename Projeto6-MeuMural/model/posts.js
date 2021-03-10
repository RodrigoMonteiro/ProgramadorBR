module.exports = {

    posts: [
        { id: "0", title: "Teste título", description: "Teste descrição" },
        { id: "1", title: "Teste título 1", description: "Teste descrição 1" },

    ],
    getAll() {
        return this.posts
    }
    ,
    newPost(title, description) {

        this.posts.push = { id: this.generateId(), title, description }
    },
    generateId() {
        return Math.random().toString(36).substr(2, 9)
    }


}