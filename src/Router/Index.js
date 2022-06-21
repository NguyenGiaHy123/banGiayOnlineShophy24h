const user=require('./user');
const product=require('./product');
const Cart=require('./Cart')
const Comment=require('./Comment')
function Router(app){
    app.use('/api/user',user)
    app.use('/api/product',product)
    app.use('/api/cart',Cart)
    app.use('/api/comment',Comment)
}
module.exports=Router