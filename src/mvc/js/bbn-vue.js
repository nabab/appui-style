// Javascript Document

(() => {
	return {
    data(){
      return{
        color:'',
        states: [{
        text: 'todo',
        value: 'todo'
      }, {
        text: 'ready',
        value: 'ready'
      }, {
        text: 'dev',
        value: 'dev'
      }]
      }
    },
  	computed: {
      priorities(){
        let res = [];
        for ( let i = 1; i < 6; i++ ){
          res.push({
            text: i,
            value: i
          })
        }
        return res;
      }
    },

    methods:{
      save(a){
        let data = this.find('bbn-table').currentData;
        this.post(this.source.root + 'bbn-vue', {'structure': data} ,(d) => {
          if(d.success){
            appui.success(bbn._('Saved'))
          }
          else{
            appui.error(bbn._('Something went wrong'))
          }
        })
        bbn.fn.log('change',data)
      },
      renderKendo(row){
        if ( row.kendo ){
          return '<i class="nf nf-fa-times bbn-red bbn-medium"></i>'
        }
        else{
          return '<i class="nf nf-fa-check bbn-green bbn-medium"></i>'
        }
      },
      renderState(row){
        let style = 'margin-left:auto;margin-right:auto;width: 15px; height: 15px; border-radius: 100%; background-color:';
        if ( row.state === 'todo' ){
          style += 'red'
          return '<div style="' + style +'"></div>'
        }
        else if (row.state === 'ready') {
          style += 'green'
          return '<div style="' + style + '"></div>'
        }
        else if (row.state === 'dev') {
          style += 'orange'
          return '<div style="' + style + '"></div>'
        }
      }
    },
  }
})();