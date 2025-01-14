/**
 * Created by BBN Solutions.
 * User: Loredana Bruno
 * Date: 24/07/17
 * Time: 19.29
 */
(() => {
  return {
    data(){
      return {
        ready: false,
        props: false,
        final :[]
      }
    },
    beforeCreate(){
      bbn.fn.each(Vue.options.components, (a, name) => {
        if ( (name.indexOf('bbn-') === 0) && (a.options === undefined) ){
          a(() => {}, () => {});
        }
      });
    },
    beforeMount(){
      setTimeout( () => {
        /*
        //$.each(Vue.options.components, (name, a) => {
          if ( name.indexOf('bbn-') === 0 ){
            idxDataComponent = bbn.fn.search(dataComponents, {name: name});
            idx = res.length;
            res.push({
              name: name,
              desc: '',
              props: []
            });
            if ( idxDataComponent > -1 ){
              if ( dataComponents[idxDataComponent].desc ){
                res[idx].desc = dataComponents[idxDataComponent].desc;
              }
            }
            if ( a.options ){
              //$.each(a.options.props, (propName, prop) => {
                var obj = {
                  name: propName,
                  types: [],
                  desc: ''
                };
                if ( prop.default ){
                //  obj.default = $.isFunction(prop.default) ? prop.default() : prop.default;
                }
                if ( idxDataComponent > -1 ){
                  if ( dataComponents[idxDataComponent].props ){
                    idxPropComponent = bbn.fn.search(dataComponents[idxDataComponent].props, {name: propName});
                    if ( (idxPropComponent > -1) && dataComponents[idxDataComponent].props[idxPropComponent].desc ){
                      obj.desc = dataComponents[idxDataComponent].props[idxPropComponent].desc;
                    }
                  }

                }
                if ( prop.type ){
                 // $.each(prop.type, (i, type) => {
                    obj.types.push(type.name)
                  });
                }
                res[idx].props.push(obj);
              });
            }
            else if ( idxDataComponent > -1 ){
              res[idx].props = dataComponents[idxDataComponent].props;
            }
          }
        });
        */
        //$("textarea", ele).val(JSON.stringify(res, null, 2));
        let props = [];
        bbn.fn.each(Vue.options.components, (a, name) => {
          if (
            (name.indexOf('bbn-') === 0) &&
            a.options &&
            a.options.props
          ){
            bbn.fn.each(a.options.props, (prop, i) => {
              //if ( $.inArray(prop, props) === -1 ){
              if ( props.indexOf(prop) === -1 ){  
                props.push(prop);
              }
            })
          }
        });
        props.sort();
        let final = [];
        bbn.fn.each(Vue.options.components, (cp, name) => {
          if ( name.indexOf('bbn-') === 0 ){
            let row = {
              componentName: name
            };
            bbn.fn.each(props, (prop, i) => {
              row[prop] = !!(cp.options && cp.options.props && (cp.options.props[prop] !== undefined));
            });
            final.push(row);
          }
        });

        //bbn.fn.log(JSON.stringify(final, null, 2))
        this.final = final;
        this.props = props;
        this.ready = true;
        /*$("textarea", ele).val(JSON.stringify(final, null, 2));*/
      }, 7000);
    },
    methods : {
      finalData(){},
      renderCol(val){
        return '<i style="font-weight: bold" class="' + ( val ? 'nf nf-fa-check bbn-b' : '') + '"></i>';
      }
    },
    computed: {
      columns(){
        if ( !this.props ){
          return [];
        }
        else{
          let cols = [];
          bbn.fn.each(this.props, (c, i) => {
            cols.push({
              field: c,
              label: c,
              render: (data) => {
                return this.renderCol(data[c])
              },
              width: 130,
              cls: 'bbn-c'
            })
          });
          return cols;
        }
      }
    }
  };
})();