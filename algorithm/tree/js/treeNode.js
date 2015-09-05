/**
 * Created by wungcq on 15/9/4.
 */

define(function (require, exports, module) {
  function treeNode(value,parent) {
    this.parentNode = parent || null;
    this.value = value;
    this.depth = this.parentNode && (this.parentNode.depth + 1) || 0;
    this.leftNode = left || null;
    this.rightNode = right || null;
    return this;
  }

  treeNode.prototype.parent = function (treeNode) {
    if (treeNode) {
      this.parentNode = treeNode;
    }
    return this;
  };

  treeNode.prototype.left = function (treeNode) {
    if (treeNode) {
      this.leftNode = treeNode;
    }
    return this;
  };

  treeNode.prototype.right = function (treeNode) {
    if (treeNode) {
      this.rightNode = treeNode;
    }
    return this;
  };

  treeNode.prototype.deep = function () {
    return this.depth;
  };




  module.exports = treeNode;
});
