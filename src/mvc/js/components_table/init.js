/**
 * Created by 'bbn Solutions.
 * User: Loredana Bruno
 * Date: 11/09/17
 * Time: 12.10
 */
(function(){
  return {
    data(){
      return{
        components: [],
        columns: [],
        data:[]
        //autocomplete_props : this.$refs.autocomplete.$props
      }
    },
    created(){
      //this.components = $.map(Vue.options.components, (n, cp) => {
      this.components = Vue.options.components.map((n, cp) => {  

      });
    },
    mounted(){
      bbn.fn.each(components_name, (v, i) => {
        components.name.push(v);
        components.props.push( 'this.$refs.' + v + '.$props' );
      })
      //this.autocomplete.props = this.$refs.autocomplete.$props
    }

  }
})();