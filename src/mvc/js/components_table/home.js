/**
 * Created by BBN Solutions.
 * User: Loredana Bruno
 * Date: 11/09/17
 * Time: 12.10
 */
/**
 * Created by 'bbn Solutions.
 * User: Loredana Bruno
 * Date: 11/09/17
 * Time: 12.10
 */
(function(){
  var cp ;
  const hooks = ['create', 'mount', 'update', 'destroy'];
  return {
    data(){
      return{
        all: [],
        options: [{
          'option': 'Props'
        }, {
          'option': 'Methods'
        }, {
          'option': 'Events'
        }],
        components: [],
        columns: [],
        data:[],
        propsNames: [],
        isMounted: false
        //autocomplete_props : this.$refs.autocomplete.$props
      }
    },
    created(){
      cp = this;
      let columns = [];
      for ( let n in Vue.options.components ){
        // Is it part of bbn components?
        if ( (n.indexOf('bbn-') === 0) ){
          bbn.fn.log("COMPONENTS", Vue.options.components['bbn-' + n]);
          columns.push({
            field: n.substring(4),
            title: n.substring(4).replace("-", " "),
          });
        }
      }
      this.columns = columns;
    },
    mounted(){
      let d = [];
      bbn.fn.each(hooks, (a, i) => {
        d.push({name: 'before' + bbn.fn.substr(a, 0, 1).toUpperCase() + bbn.fn.substr(1), cat: 'hook'});
        d.push({name: a + (bbn.fn.substr(-1) === 'e' ? 'd' : 'ed'), cat: 'hook'});
      });
      setTimeout(() => {
        bbn.fn.each(this.columns, (a, i) => {
          let comp = Vue.options.components['bbn-' + a.field];
          bbn.fn.log(a.field);
          // props
          //bbn.fn.log(comp.options);
          //alert(a.field);
          if ( comp.options ){
            if ( comp.options.props ){
              bbn.fn.each(comp.options.props, (b, j) => {
                if ( bbn.fn.search(d, {name: j, cat: 'prop'}) === -1 ){
                  d.push({
                    name: j,
                    cat: 'prop'
                  });
                }
              })
            }
            //
            if ( comp.options.methods ){
              bbn.fn.each(comp.options.methods, (b, j) => {
                if ( bbn.fn.search(d, {name: j, cat: 'method'}) === -1 ){
                  d.push({
                    name: j,
                    cat: 'method'
                  });
                }
              })
            }
            if ( comp.options.mixins ){
              bbn.fn.each(comp.options.mixins, (b, j) => {
                bbn.fn.each(bbn.vue, (c, k) => {
                  if ( c === b ){
                    if ( bbn.fn.search(d, {name: k, cat: 'mixins'}) === -1 ){
                      d.push({
                        name: k,
                        cat: 'mixins'
                      });
                    }
                  }
                })
              })
            }
          }
          else{
            bbn.fn.log("error with component" + a.field)
          }
        });
        bbn.fn.each(d, (a, i) => {
          bbn.fn.each(this.columns, (c, j) => {
            let comp = Vue.options.components['bbn-' + c.field],
              v = false;
            if ( comp.options ){
              switch ( a.cat ){
                case 'prop':
                  if ( comp.options.props && (comp.options.props[a.name] !== undefined) ){
                    v = comp.options.props[a.name];
                  }
                  break;
                case 'method':
                  if ( comp.options.methods && (comp.options.methods[a.name] !== undefined) ){
                    v = true;
                  }
                  break;
                case 'mixins':
                  //if ( comp.options.mixins && ($.inArray(comp.options.mixins, bbn.vue[a.name]) > -1) ){
                  if ( comp.options.mixins && ( bbn.vue[a.name].indexOf(comp.options.mixins) > -1) ){  
                    v = true;
                  }
                  break;
                case 'hook':
                  if ( comp.options[a.name] ){
                    v = true;
                  }
                  break;
              }
            }
            a[c.field] = v;
          })
        });
        this.columns.unshift({
          field:"cat",
          title:"cat",
          fixed: true
        }, {
          field:"name",
          title:"name",
          fixed: true
        });
        this.data = d;
        this.isMounted = true;
      }, 5000);
      /*
      for ( let n in Vue.options.components ){
        // Is it part of bbn components?
        if ( (n.indexOf('bbn-') === 0) ){
          bbn.fn.log("COMPONENTS", Vue.options.components[n]);
          columns.push({
            field: n,
            title: n.substring(4).replace("-", " "),
          });
          if ( Vue.options.components[n].options ){
            d.push({
              field: n,
              props: Vue.options.components[n].options.props,
              methods: Vue.options.components[n].options.methods,
            });
          }
        }
      }
      this.all = d;

      var neArr = [],
        n = [];
  //create an array with all props names taken once

      //$.each(this.all, (i,v) => {
        neArr.push( Object.getOwnPropertyNames(v.props) )
      });
      //$.each( neArr, (i, v) => {
        //$.each(v, ( a, z ) => {
        //  if( $.inArray( z, this.propsNames ) === -1 ){
            this.propsNames.push( { [z] : [] } )
          }
        })
      });
      */

    },
    components:{
      'tableProps': {
        template: '#tableProps',
        props:['source'],
        methods: {},
        //mounted(){bbn.fn.log('thiiiiiiiis', this, this.$parent, this.$parent.$refs.table.columns)},
        data(){
          return {
            col1: cp.columns
          }
        },

      }
    },

  }
})();