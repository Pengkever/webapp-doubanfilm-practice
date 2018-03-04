var api = require('../../utils/api.js');

Page({
  data:{
    pn:0,
    list:[],    
    showMore:true,
    showLoading:true
  },
  redirect:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
        url:'../detail/detail?id='+id
    })
  },
  scrolltolower:function(e){
    if(!this.data.showMore)return;
    this.loadData(this.data.pn);
  },
  loadData:function(pn){
    api.getList('coming_soon',pn)
        .then(res=>{
            if(res.subjects.length>0){
                this.setData({
                  list:this.data.list.concat(res.subjects),
                  showLoading:false,
                  pn:pn+1
                })
            }
            else{
              this.setData({
                showMore:false
              })
            }
        })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
     this.loadData(this.data.pn)
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
   
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
   
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
   
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
   
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})