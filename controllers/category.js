import Category from '../model/category';

//Add Product
export const create = (req,res) =>{
    const category = new Category(req.body);
    category.save((err, data) =>{
        if(err){
            return res.status(400).json({
                error:"Không thêm được danh mục!"
            })
        }
        res.json({data})
    })
}
//List Products
export const list = (req, res)=>{
    Category.find((err, data) =>{
        if(err){
            error:"Không tìm thấy sản phẩm"
        }
        res.json(data)
    })
}
//Product Detail
export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if(err || !category) {
        res.status(400).json({
                error: "Không tìm thấy sản phẩm"
            })
        }
        req.category = category;
        next();
    })
}
export const read = (req, res) =>{
    return res.json(req.category);
}
//Delete category
export const remove = (req, res) =>{
    let category = req.category;
    category.remove((err, deleteCategory) => {
        if(err||!category){
            return res.status(400).json({
                error: "Không xóa được sản phẩm"
            })
        }
        res.json({
            deleteCategory,
            message:"Sản phẩm đã được xóa thành công"
        })
    })
}
//Update Category
export const update = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Category does not exist"
            })
        }
        res.json({ data 
        ,message:"Sản phẩm đã được cập nhật thành công" });
    });
}