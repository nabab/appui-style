<?php

/** @var $model \bbn\Mvc\Model*/
if ( isset($model->data['structure']) ){
  $file = BBN_DATA_PATH.'bbn-vue.json';
  $data = $model->data['structure'];
  file_put_contents($file, Json_encode($data));
  return [
    'success' => 1,
  ];
}
else{
  $components = ["bbn-appui", "bbn-treemenu", "bbn-popup", "bbn-notification", "bbn-fisheye", "bbn-pane", "bbn-tabnav", "bbn-loadbar", "bbn-chat", "bbn-splitter", "bbn-tabnav", "bbn-button", "bbn-table", "bbn-window", "bbn-autocomplete", "bbn-combo", "bbn-context", "bbn-tree", "bbn-tree-node", "bbn-loadicon", "bbn-scroll", "bbn-input", "bbn-numeric", "bbn-dropdown", "bbn-loader", "bbn-initial", "bbn-chart", "bbn-radio", "bbn-checkbox", "bbn-router", "bbn-container", "bbn-menu", "bbn-toolbar", "bbn-scrollbar", "bbn-code", "bbn-markdown", "bbn-datetimepicker", "bbn-form", "bbn-field", "bbn-browser", "bbn-chart2", "bbn-colorpicker", "bbn-colorpicker2", "bbn-countdown", "bbn-countdown2", "bbn-dashboard", "bbn-datepicker", "bbn-dropdown2", "bbn-dropdowntreeview", "bbn-file", "bbn-file2", "bbn-filter", "bbn-filter-form", "bbn-finder", "bbn-floater", "bbn-grapes", "bbn-hierarchy", "bbn-icon", "bbn-json-editor", "bbn-list", "bbn-masked", "bbn-message", "bbn-multiselect", "bbn-operator", "bbn-panelbar", "bbn-panelbar2", "bbn-progressbar", "bbn-rte2", "bbn-scheduler", "bbn-rte", "bbn-search", "bbn-slider", "bbn-slideshow", "bbn-switch", "bbn-textarea", "bbn-timepicker", "bbn-tooltip", "bbn-tree-input", "bbn-upload", "bbn-uploader-prompt", "bbn-video", "bbn-vlist"];
  $file = BBN_DATA_PATH.'bbn-vue.json';
  
  $data = is_file($file) ? json_decode(file_get_contents($file), true) : [];
  foreach ( $components as $cp ){
    $idx = \bbn\X::find($data, ['name' => $cp]);
    if ( $idx === null ){
      $data[] = [
        'name' => $cp,
        'kendo' => 0,
        'state' => 'todo',
        'priority' => 5,
        'issues' => ''
      ];
    }
  };
  return [
    'data' => $data
  ];
}