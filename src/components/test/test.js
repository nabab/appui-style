/**
 * Created by BBN Solutions.
 * User: Loredana Bruno
 * Date: 25/07/17
 * Time: 11.05
 */

(() => {
  return {
    data(){
      return this.source;
    },
    computed:{
      menu(){
        return  [
      {
        text: 'File',
        items: [{
          text: '<i class="nf nf-fa-plus"></i>New',
          items: [{
            text: '<i class="nf nf-fa-file"></i>File',
            select: "bbn.ide.newFile();"
          }, {
            text: '<i class="nf nf-fa-folder"></i>Directory',
            select: "bbn.ide.newDir();"
          }]
        }, {
          text: '<i class="nf nf-fa-save"></i>Save',
          select: "bbn.ide.save();"
        }, {
          text: '<i class="nf nf-fa-trash_alt"></i>Delete'
        }, {
          text: '<i class="nf nf-fa-times_circle"></i>Close',
          select: "bbn.ide.tabstrip.tabNav('close');"
        }, {
          text: '<i class="nf nf-fa-times_circle"></i>Close all tabs',
          select: "bbn.ide.tabstrip.tabNav('closeAll');"
        }]
      }, {
        text: 'Edit',
        items: [{
          text: '<i class="nf nf-fa-search"></i>Find <small>CTRL+F</small>',
          select: "bbn.ide.search();"
        }, {
          text: '<i class="nf nf-fa-search_plus"></i>Find next <small>CTRL+G</small>',
          select: "bbn.ide.findNext();"
        }, {
          text: '<i class="nf nf-fa-search_minus"></i>Find previous <small>SHIFT+CTRL+G</small>',
          select: "bbn.ide.findPrev();"
        }, {
          text: '<i class="nf nf-fa-exchange_alt"></i>Replace <small>SHIFT+CTRL+F</small>',
          select: "bbn.ide.replace();"
        }, {
          text: '<i class="nf nf-fa-retweet"></i>Replace All <small>SHIFT+CTRL+R</small>',
          select: "bbn.ide.replaceAll();"
        }]
      }, {
        text: 'History',
        items: [{
          text: '<i class="nf nf-fa-history"></i>Show',
          select: 'bbn.ide.history();'
        }, {
          text: '<i class="nf nf-fa-trash_alt"></i>Clear',
          select: 'bbn.ide.historyClear();'
        }, {
          text: '<i class="nf nf-fa-trash"></i>Clear All',
          select: 'bbn.ide.historyClearAll();'
        }]
      }, {
        text: 'Doc.',
        items: [{
          text: '<i class="nf nf-fa-binoculars"></i>Find'
        }, {
          text: '<i class="nf nf-fa-book"></i>Generate'
        }]
      }/*, {
       text: 'Current',
       items: [{
       text: 'Add View'
       }, {
       text: 'Add Model'
       }, {
       text: 'Remove current'
       }]
       }*/, {
        text: bbn._('Pref.'),
        items: [{
          text: '<i class="nf nf-fa-cog"></i>Manage directories',
          select: "bbn.ide.cfgDirs();"
        }, {
          text: '<i class="nf nf-fa-language"></i>IDE style',
          select: "bbn.ide.cfgStyle();"
        }]
      }
    ]
      }
    },
    mounted(){
      var vm = this;
      vm.$nextTick(function(){
        bbn.fn.analyzeContent(vm.$el, true);
      });
      vm.isMounted = true;
    },
    beforeMount(){
      var vm = this;
    },
    methods: {

    },
    updated(){
      var vm = this;
      vm.$nextTick(function(){
        bbn.fn.analyzeContent(vm.$el, true);
      });
    },
    watch:{

    }

  };
})();