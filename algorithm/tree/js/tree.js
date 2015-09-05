/**
 * Created by wungcq on 15/9/4.
 */
define(function (require, exports, module) {
  var Comparator = require('../../util/comparator');
  var treeNode = require('./treeNode');


  var tree = function (comparFn) {
    this.root = null;
    this._size = 0;

    // @var Comapartor
    this._comparator = new Comapartor(comparFn);

    Object.defineProperty(this, 'size', {
      get: function() {
        return this._size;
      }.bind(this)
    });

    return this;
  };


  tree.prototype.insert = function(value, parent){
    //如果没有传入 parentNode，那么分两种情况
    // 1. 这棵树现在要被初始化，那么这个值对应的就是根节点
    // 2. 约定，这个节点是直接挂在根节点上的
    if(!parent){
      if(!this.root){
        this.root = new treeNode(value);
        this._size++;
        return this;
      }
      parent = this.root;
    }

    var child = this._comparator.lessThan(value, parent.value);
    if(parent[child]) {
      this.insert(value, parent[child]);
    } else {
      parent[child] = new treeNode(value, parent);
      this._size ++ ;
    }

  }

  tree.prototype.contains = function(e){
    return !!this._find(e);
  }

  tree.prototype._find = function(e,root){
    if(!root) {
      if(this.root) {
        root = this.root;
      } else {
        return false;
      }
    }

    if(root.value == e) {
      return root;
    }

    if(this._comparator.lessThan(e, root.value)){
      return root.left && this._find(e, root.left);
    }

    if(this._comparator.greaterThan(e, root.value)){
      return root.right && this._find(e, root.right);
    }
  }

  tree.prototype._replaceNodeInParent = function(currNode, newNode) {
    var parent = currNode.parent;
    if (parent) {
      parent[currNode == parent.left ? 'left' : 'right'] = newNode;
      if(newNode) {
        newNode.parent = parent;
      }
      else{
        this.root = newNode;
      }
    }
  }

  tree.prototype._findMin = function (root) {
    var minNode = root;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode;
  };

  module.exports = tree;
});
