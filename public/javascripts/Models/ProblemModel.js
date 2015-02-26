/**
 * Created by wungcq on 15/2/15.
 */
window.ProblemModel = function(){
    return this;
};

//Problem 继承自数据模型类
ProblemModel.prototype = new Model();
//需要设置每个数据模型的增删改查路径
(function(){
    ProblemModel.prototype.templatePath = 'http://localhost:63342/github/ngtest/public/templates/problem.html';
    ProblemModel.prototype.AddPath      = 'http://localhost:63342/github/ngtest/public/JSON/create_problem.json';
    ProblemModel.prototype.RetrievePath = 'http://localhost:63342/github/ngtest/public/JSON/get_problem.json';
    ProblemModel.prototype.UpdatePath   = 'http://localhost:63342/github/ngtest/public/JSON/update_problem.json';
})();