'use strict'

/* eslint-disable no-template-curly-in-string */

import './polyfills'

const _locales = ['en', 'pt-BR', 'zh-CN', 'tr', 'ja']
const _defs = {
  en: {
    array: 'Array',
    auto: 'Auto',
    appendText: 'Append',
    appendTitle: 'Append a new field with type \'auto\' after this field (Ctrl+Shift+Ins)',
    appendSubmenuTitle: 'Select the type of the field to be appended',
    appendTitleAuto: 'Append a new field with type \'auto\' (Ctrl+Shift+Ins)',
    ascending: 'Ascending',
    ascendingTitle: 'Sort the childs of this ${type} in ascending order',
    actionsMenu: 'Click to open the actions menu (Ctrl+M)',
    collapseAll: 'Collapse all fields',
    descending: 'Descending',
    descendingTitle: 'Sort the childs of this ${type} in descending order',
    drag: 'Drag to move this field (Alt+Shift+Arrows)',
    duplicateKey: 'duplicate key',
    duplicateText: 'Duplicate',
    duplicateTitle: 'Duplicate selected fields (Ctrl+D)',
    duplicateField: 'Duplicate this field (Ctrl+D)',
    duplicateFieldError: 'Duplicate field name',
    cannotParseFieldError: 'Cannot parse field into JSON',
    cannotParseValueError: 'Cannot parse value into JSON',
    empty: 'empty',
    expandAll: 'Expand all fields',
    expandTitle: 'Click to expand/collapse this field (Ctrl+E). \n' +
      'Ctrl+Click to expand/collapse including all childs.',
    insert: 'Insert',
    insertTitle: 'Insert a new field with type \'auto\' before this field (Ctrl+Ins)',
    insertSub: 'Select the type of the field to be inserted',
    object: 'Object',
    ok: 'Ok',
    redo: 'Redo (Ctrl+Shift+Z)',
    removeText: 'Remove',
    removeTitle: 'Remove selected fields (Ctrl+Del)',
    removeField: 'Remove this field (Ctrl+Del)',
    selectNode: 'Select a node...',
    showAll: 'show all',
    showMore: 'show more',
    showMoreStatus: 'displaying ${visibleChilds} of ${totalChilds} items.',
    sort: 'Sort',
    sortTitle: 'Sort the childs of this ${type}',
    sortTitleShort: 'Sort contents',
    sortFieldLabel: 'Field:',
    sortDirectionLabel: 'Direction:',
    sortFieldTitle: 'Select the nested field by which to sort the array or object',
    sortAscending: 'Ascending',
    sortAscendingTitle: 'Sort the selected field in ascending order',
    sortDescending: 'Descending',
    sortDescendingTitle: 'Sort the selected field in descending order',
    string: 'String',
    transform: 'Transform',
    transformTitle: 'Filter, sort, or transform the childs of this ${type}',
    transformTitleShort: 'Filter, sort, or transform contents',
    extract: 'Extract',
    extractTitle: 'Extract this ${type}',
    transformQueryTitle: 'Enter a JMESPath query',
    transformWizardLabel: 'Wizard',
    transformWizardFilter: 'Filter',
    transformWizardSortBy: 'Sort by',
    transformWizardSelectFields: 'Select fields',
    transformQueryLabel: 'Query',
    transformPreviewLabel: 'Preview',
    type: 'Type',
    typeTitle: 'Change the type of this field',
    openUrl: 'Ctrl+Click or Ctrl+Enter to open url in new window',
    undo: 'Undo last action (Ctrl+Z)',
    validationCannotMove: 'Cannot move a field into a child of itself',
    autoType: 'Field type "auto". ' +
      'The field type is automatically determined from the value ' +
      'and can be a string, number, boolean, or null.',
    objectType: 'Field type "object". ' +
      'An object contains an unordered set of key/value pairs.',
    arrayType: 'Field type "array". ' +
      'An array contains an ordered collection of values.',
    stringType: 'Field type "string". ' +
      'Field type is not determined from the value, ' +
      'but always returned as string.',
    modeCodeText: 'Code',
    modeCodeTitle: 'Switch to code highlighter',
    modeFormText: 'Form',
    modeFormTitle: 'Switch to form editor',
    modeTextText: 'Text',
    modeTextTitle: 'Switch to plain text editor',
    modeTreeText: 'Tree',
    modeTreeTitle: 'Switch to tree editor',
    modeViewText: 'View',
    modeViewTitle: 'Switch to tree view',
    modePreviewText: 'Preview',
    modePreviewTitle: 'Switch to preview mode',
    examples: 'Examples',
    default: 'Default'
  },
  'zh-CN': {
    array: '数组',
    auto: '自动',
    appendText: '追加',
    appendTitle: '在此字段后追加一个类型为“auto”的新字段 (Ctrl+Shift+Ins)',
    appendSubmenuTitle: '选择要追加的字段类型',
    appendTitleAuto: '追加类型为“auto”的新字段 (Ctrl+Shift+Ins)',
    ascending: '升序',
    ascendingTitle: '升序排列${type}的子节点',
    actionsMenu: '点击打开动作菜单(Ctrl+M)',
    collapseAll: '缩进所有字段',
    descending: '降序',
    descendingTitle: '降序排列${type}的子节点',
    drag: '拖拽移动该节点(Alt+Shift+Arrows)',
    duplicateKey: '重复键',
    duplicateText: '复制',
    duplicateTitle: '复制选中字段(Ctrl+D)',
    duplicateField: '复制该字段(Ctrl+D)',
    duplicateFieldError: '重复的字段名称',
    cannotParseFieldError: '无法将字段解析为JSON',
    cannotParseValueError: '无法将值解析为JSON',
    empty: '清空',
    expandAll: '展开所有字段',
    expandTitle: '点击 展开/收缩 该字段(Ctrl+E). \n' +
      'Ctrl+Click 展开/收缩 包含所有子节点.',
    insert: '插入',
    insertTitle: '在此字段前插入类型为“auto”的新字段 (Ctrl+Ins)',
    insertSub: '选择要插入的字段类型',
    object: '对象',
    ok: 'Ok',
    redo: '重做 (Ctrl+Shift+Z)',
    removeText: '移除',
    removeTitle: '移除选中字段 (Ctrl+Del)',
    removeField: '移除该字段 (Ctrl+Del)',
    selectNode: '选择一个节点...',
    showAll: '展示全部',
    showMore: '展示更多',
    showMoreStatus: '显示${totalChilds}的${visibleChilds}项目.',
    sort: '排序',
    sortTitle: '排序${type}的子节点',
    sortTitleShort: '内容排序',
    sortFieldLabel: '字段：',
    sortDirectionLabel: '方向：',
    sortFieldTitle: '选择用于对数组或对象排序的嵌套字段',
    sortAscending: '升序排序',
    sortAscendingTitle: '按照该字段升序排序',
    sortDescending: '降序排序',
    sortDescendingTitle: '按照该字段降序排序',
    string: '字符串',
    transform: '变换',
    transformTitle: '筛选，排序，或者转换${type}的子节点',
    transformTitleShort: '筛选，排序，或者转换内容',
    extract: '提取',
    extractTitle: '提取这个 ${type}',
    transformQueryTitle: '输入JMESPath查询',
    transformWizardLabel: '向导',
    transformWizardFilter: '筛选',
    transformWizardSortBy: '排序',
    transformWizardSelectFields: '选择字段',
    transformQueryLabel: '查询',
    transformPreviewLabel: '预览',
    type: '类型',
    typeTitle: '更改字段类型',
    openUrl: 'Ctrl+Click 或者 Ctrl+Enter 在新窗口打开链接',
    undo: '撤销上次动作 (Ctrl+Z)',
    validationCannotMove: '无法将字段移入其子节点',
    autoType: '字段类型 "auto". ' +
      '字段类型由值自动确定 ' +
      '可以为 string，number，boolean，或者 null.',
    objectType: '字段类型 "object". ' +
      '对象包含一组无序的键/值对.',
    arrayType: '字段类型 "array". ' +
      '数组包含值的有序集合.',
    stringType: '字段类型 "string". ' +
      '字段类型由值自动确定，' +
      '但始终作为字符串返回.',
    modeCodeText: '代码',
    modeCodeTitle: '切换至代码高亮',
    modeFormText: '表单',
    modeFormTitle: '切换至表单编辑',
    modeTextText: '文本',
    modeTextTitle: '切换至文本编辑',
    modeTreeText: '树',
    modeTreeTitle: '切换至树编辑',
    modeViewText: '视图',
    modeViewTitle: '切换至树视图',
    modePreviewText: '预览',
    modePreviewTitle: '切换至预览模式',
    examples: '例子',
    default: '缺省'
  },
  'pt-BR': {
    array: 'Lista',
    auto: 'Automatico',
    appendText: 'Adicionar',
    appendTitle: 'Adicionar novo campo com tipo \'auto\' depois deste campo (Ctrl+Shift+Ins)',
    appendSubmenuTitle: 'Selecione o tipo do campo a ser adicionado',
    appendTitleAuto: 'Adicionar novo campo com tipo \'auto\' (Ctrl+Shift+Ins)',
    ascending: 'Ascendente',
    ascendingTitle: 'Organizar filhor do tipo ${type} em crescente',
    actionsMenu: 'Clique para abrir o menu de ações (Ctrl+M)',
    collapseAll: 'Fechar todos campos',
    descending: 'Descendente',
    descendingTitle: 'Organizar o filhos do tipo ${type} em decrescente',
    duplicateKey: 'chave duplicada',
    drag: 'Arraste para mover este campo (Alt+Shift+Arrows)',
    duplicateText: 'Duplicar',
    duplicateTitle: 'Duplicar campos selecionados (Ctrl+D)',
    duplicateField: 'Duplicar este campo (Ctrl+D)',
    duplicateFieldError: 'Nome do campo duplicado',
    cannotParseFieldError: 'Não é possível analisar o campo no JSON',
    cannotParseValueError: 'Não é possível analisar o valor em JSON',
    empty: 'vazio',
    expandAll: 'Expandir todos campos',
    expandTitle: 'Clique para expandir/encolher este campo (Ctrl+E). \n' +
      'Ctrl+Click para expandir/encolher incluindo todos os filhos.',
    insert: 'Inserir',
    insertTitle: 'Inserir um novo campo do tipo \'auto\' antes deste campo (Ctrl+Ins)',
    insertSub: 'Selecionar o tipo de campo a ser inserido',
    object: 'Objeto',
    ok: 'Ok',
    redo: 'Refazer (Ctrl+Shift+Z)',
    removeText: 'Remover',
    removeTitle: 'Remover campos selecionados (Ctrl+Del)',
    removeField: 'Remover este campo (Ctrl+Del)',
    // TODO: correctly translate
    selectNode: 'Selecione um nódulo...',
    showAll: 'mostrar todos',
    showMore: 'mostrar mais',
    // TODO: correctly translate
    showMoreStatus: 'exibindo ${visibleChilds} de ${totalChilds} itens.',
    sort: 'Organizar',
    sortTitle: 'Organizar os filhos deste ${type}',
    // TODO: correctly translate
    sortTitleShort: 'Organizar os filhos',
    sortFieldLabel: 'Campo:',
    sortDirectionLabel: 'Direção:',
    sortFieldTitle: 'Selecione um campo filho pelo qual ordenar o array ou objeto',
    sortAscending: 'Ascendente',
    sortAscendingTitle: 'Ordenar o campo selecionado por ordem ascendente',
    sortDescending: 'Descendente',
    sortDescendingTitle: 'Ordenar o campo selecionado por ordem descendente',
    string: 'Texto',
    // TODO: correctly translate
    transform: 'Transformar',
    transformTitle: 'Filtrar, ordenar ou transformar os filhos deste ${type}',
    transformTitleShort: 'Filtrar, ordenar ou transformar conteúdos',
    // TODO: correctly translate
    transformQueryTitle: 'Insira uma expressão JMESPath',
    // TODO: correctly translate
    transformWizardLabel: 'Assistente',
    transformWizardFilter: 'Filtro',
    transformWizardSortBy: 'Ordenar por',
    transformWizardSelectFields: 'Selecionar campos',
    transformQueryLabel: 'Expressão',
    transformPreviewLabel: 'Visualizar',
    type: 'Tipo',
    typeTitle: 'Mudar o tipo deste campo',
    openUrl: 'Ctrl+Click ou Ctrl+Enter para abrir link em nova janela',
    undo: 'Desfazer último ação (Ctrl+Z)',
    validationCannotMove: 'Não pode mover um campo como filho dele mesmo',
    autoType: 'Campo do tipo "auto". ' +
      'O tipo do campo é determinao automaticamente a partir do seu valor ' +
      'e pode ser texto, número, verdade/falso ou nulo.',
    objectType: 'Campo do tipo "objeto". ' +
      'Um objeto contém uma lista de pares com chave e valor.',
    arrayType: 'Campo do tipo "lista". ' +
      'Uma lista contem uma coleção de valores ordenados.',
    stringType: 'Campo do tipo "string". ' +
      'Campo do tipo nao é determinado através do seu valor, ' +
      'mas sempre retornara um texto.',
    examples: 'Exemplos',
    default: 'Revelia'
  },
  tr: {
    array: 'Dizin',
    auto: 'Otomatik',
    appendText: 'Ekle',
    appendTitle: 'Bu alanın altına \'otomatik\' tipinde yeni bir alan ekle (Ctrl+Shift+Ins)',
    appendSubmenuTitle: 'Eklenecek alanın tipini seç',
    appendTitleAuto: '\'Otomatik\' tipinde yeni bir alan ekle (Ctrl+Shift+Ins)',
    ascending: 'Artan',
    ascendingTitle: '${type}\'ın alt tiplerini artan düzende sırala',
    actionsMenu: 'Aksiyon menüsünü açmak için tıklayın (Ctrl+M)',
    collapseAll: 'Tüm alanları kapat',
    descending: 'Azalan',
    descendingTitle: '${type}\'ın alt tiplerini azalan düzende sırala',
    drag: 'Bu alanı taşımak için sürükleyin (Alt+Shift+Arrows)',
    duplicateKey: 'Var olan anahtar',
    duplicateText: 'Aşağıya kopyala',
    duplicateTitle: 'Seçili alanlardan bir daha oluştur (Ctrl+D)',
    duplicateField: 'Bu alandan bir daha oluştur (Ctrl+D)',
    duplicateFieldError: 'Duplicate field name',
    cannotParseFieldError: 'Alan JSON\'a ayrıştırılamıyor',
    cannotParseValueError: 'JSON\'a değer ayrıştırılamıyor',
    empty: 'boş',
    expandAll: 'Tüm alanları aç',
    expandTitle: 'Bu alanı açmak/kapatmak için tıkla (Ctrl+E). \n' +
      'Alt alanlarda dahil tüm alanları açmak için Ctrl+Click ',
    insert: 'Ekle',
    insertTitle: 'Bu alanın üstüne \'otomatik\' tipinde yeni bir alan ekle (Ctrl+Ins)',
    insertSub: 'Araya eklenecek alanın tipini seç',
    object: 'Nesne',
    ok: 'Tamam',
    redo: 'Yeniden yap (Ctrl+Shift+Z)',
    removeText: 'Kaldır',
    removeTitle: 'Seçilen alanları kaldır (Ctrl+Del)',
    removeField: 'Bu alanı kaldır (Ctrl+Del)',
    selectNode: 'Bir nesne seç...',
    showAll: 'tümünü göster',
    showMore: 'daha fazla göster',
    showMoreStatus: '${totalChilds} alanın ${visibleChilds} alt alanları gösteriliyor',
    sort: 'Sırala',
    sortTitle: '${type}\'ın alt alanlarını sırala',
    sortTitleShort: 'İçerikleri sırala',
    sortFieldLabel: 'Alan:',
    sortDirectionLabel: 'Yön:',
    sortFieldTitle: 'Diziyi veya nesneyi sıralamak için iç içe geçmiş alanı seçin',
    sortAscending: 'Artan',
    sortAscendingTitle: 'Seçili alanı artan düzende sırala',
    sortDescending: 'Azalan',
    sortDescendingTitle: 'Seçili alanı azalan düzende sırala',
    string: 'Karakter Dizisi',
    transform: 'Dönüştür',
    transformTitle: '${type}\'ın alt alanlarını filtrele, sırala veya dönüştür',
    transformTitleShort: 'İçerikleri filterele, sırala veya dönüştür',
    transformQueryTitle: 'JMESPath sorgusu gir',
    transformWizardLabel: 'Sihirbaz',
    transformWizardFilter: 'Filtre',
    transformWizardSortBy: 'Sırala',
    transformWizardSelectFields: 'Alanları seç',
    transformQueryLabel: 'Sorgu',
    transformPreviewLabel: 'Önizleme',
    type: 'Tip',
    typeTitle: 'Bu alanın tipini değiştir',
    openUrl: 'URL\'i yeni bir pencerede açmak için Ctrl+Click veya Ctrl+Enter',
    undo: 'Son değişikliği geri al (Ctrl+Z)',
    validationCannotMove: 'Alt alan olarak taşınamıyor',
    autoType: 'Alan tipi "otomatik". ' +
      'Alan türü otomatik olarak değerden belirlenir' +
      've bir dize, sayı, boolean veya null olabilir.',
    objectType: 'Alan tipi "nesne". ' +
      'Bir nesne, sıralanmamış bir anahtar / değer çifti kümesi içerir.',
    arrayType: 'Alan tipi "dizi". ' +
      'Bir dizi, düzenli değerler koleksiyonu içerir.',
    stringType: 'Alan tipi "karakter dizisi". ' +
      'Alan türü değerden belirlenmez,' +
      'ancak her zaman karakter dizisi olarak döndürülür.',
    modeCodeText: 'Kod',
    modeCodeTitle: 'Kod vurgulayıcıya geç',
    modeFormText: 'Form',
    modeFormTitle: 'Form düzenleyiciye geç',
    modeTextText: 'Metin',
    modeTextTitle: 'Düz metin düzenleyiciye geç',
    modeTreeText: 'Ağaç',
    modeTreeTitle: 'Ağaç düzenleyiciye geç',
    modeViewText: 'Görünüm',
    modeViewTitle: 'Ağaç görünümüne geç',
    examples: 'Örnekler',
    default: 'Varsayılan'
  },
  ja: {
    array: '配列',
    auto: 'オート',
    appendText: '追加',
    appendTitle: '次のフィールドに"オート"のフィールドを追加 (Ctrl+Shift+Ins)',
    appendSubmenuTitle: '追加するフィールドの型を選択してください',
    appendTitleAuto: '"オート"のフィールドを追加 (Ctrl+Shift+Ins)',
    ascending: '昇順',
    ascendingTitle: '${type}の子要素を昇順に並べ替え',
    actionsMenu: 'クリックしてアクションメニューを開く (Ctrl+M)',
    collapseAll: 'すべてを折りたたむ',
    descending: '降順',
    descendingTitle: '${type}の子要素を降順に並べ替え',
    drag: 'ドラッグして選択中のフィールドを移動 (Alt+Shift+Arrows)',
    duplicateKey: '複製キー',
    duplicateText: '複製',
    duplicateTitle: '選択中のフィールドを複製 (Ctrl+D)',
    duplicateField: '選択中のフィールドを複製 (Ctrl+D)',
    duplicateFieldError: 'フィールド名が重複しています',
    cannotParseFieldError: 'JSONのフィールドを解析できません',
    cannotParseValueError: 'JSONの値を解析できません',
    empty: '空',
    expandAll: 'すべてを展開',
    expandTitle: 'クリックしてフィールドを展開/折りたたむ (Ctrl+E). \n' +
      'Ctrl+Click ですべての子要素を展開/折りたたむ',
    insert: '挿入',
    insertTitle: '選択中のフィールドの前に新しいフィールドを挿入 (Ctrl+Ins)',
    insertSub: '挿入するフィールドの型を選択',
    object: 'オブジェクト',
    ok: '実行',
    redo: 'やり直す (Ctrl+Shift+Z)',
    removeText: '削除',
    removeTitle: '選択中のフィールドを削除 (Ctrl+Del)',
    removeField: '選択中のフィールドを削除 (Ctrl+Del)',
    selectNode: 'ノードを選択...',
    showAll: 'すべてを表示',
    showMore: 'もっと見る',
    showMoreStatus: '${totalChilds}個のアイテムのうち ${visibleChilds}個を表示しています。',
    sort: '並べ替え',
    sortTitle: '${type}の子要素を並べ替え',
    sortTitleShort: '並べ替え',
    sortFieldLabel: 'フィールド:',
    sortDirectionLabel: '順序:',
    sortFieldTitle: '配列またはオブジェクトを並び替えるためのフィールドを選択',
    sortAscending: '昇順',
    sortAscendingTitle: '選択中のフィールドを昇順に並び替え',
    sortDescending: '降順',
    sortDescendingTitle: '選択中のフィールドを降順に並び替え',
    string: '文字列',
    transform: '変換',
    transformTitle: '${type}の子要素をフィルター・並び替え・変換する',
    transformTitleShort: '内容をフィルター・並び替え・変換する',
    extract: '抽出',
    extractTitle: '${type}を抽出',
    transformQueryTitle: 'JMESPathクエリを入力',
    transformWizardLabel: 'ウィザード',
    transformWizardFilter: 'フィルター',
    transformWizardSortBy: '並び替え',
    transformWizardSelectFields: 'フィールドを選択',
    transformQueryLabel: 'クエリ',
    transformPreviewLabel: 'プレビュー',
    type: '型',
    typeTitle: '選択中のフィールドの型を変更',
    openUrl: 'Ctrl+Click または Ctrl+Enter で 新規ウィンドウでURLを開く',
    undo: '元に戻す (Ctrl+Z)',
    validationCannotMove: '子要素に移動できません ',
    autoType: 'オート： ' +
      'フィールドの型は値から自動的に決定されます。 ' +
      '(文字列・数値・ブール・null)',
    objectType: 'オブジェクト： ' +
      'オブジェクトは順序が決まっていないキーと値のペア組み合わせです。',
    arrayType: '配列： ' +
      '配列は順序が決まっている値の集合体です。',
    stringType: '文字列： ' +
      'フィールド型は値から決定されませんが、' +
      '常に文字列として返されます。',
    modeCodeText: 'コードモード',
    modeCodeTitle: 'ハイライトモードに切り替え',
    modeFormText: 'フォームモード',
    modeFormTitle: 'フォームモードに切り替え',
    modeTextText: 'テキストモード',
    modeTextTitle: 'テキストモードに切り替え',
    modeTreeText: 'ツリーモード',
    modeTreeTitle: 'ツリーモードに切り替え',
    modeViewText: 'ビューモード',
    modeViewTitle: 'ビューモードに切り替え',
    modePreviewText: 'プレビュー',
    modePreviewTitle: 'プレビューに切り替え',
    examples: '例',
    default: 'デフォルト'
  }
}

const _defaultLang = 'en'
const userLang = typeof navigator !== 'undefined'
  ? navigator.language || navigator.userLanguage
  : undefined
let _lang = _locales.find(l => l === userLang) || _defaultLang

export function setLanguage (lang) {
  if (!lang) {
    return
  }
  const langFound = _locales.find(l => l === lang)
  if (langFound) {
    _lang = langFound
  } else {
    console.error('Language not found')
  }
}

export function setLanguages (languages) {
  if (!languages) {
    return
  }
  for (const key in languages) {
    const langFound = _locales.find(l => l === key)
    if (!langFound) {
      _locales.push(key)
    }
    _defs[key] = Object.assign({}, _defs[_defaultLang], _defs[key], languages[key])
  }
}

export function translate (key, data, lang) {
  if (!lang) {
    lang = _lang
  }
  let text = _defs[lang][key]
  if (data) {
    for (key in data) {
      text = text.replace('${' + key + '}', data[key])
    }
  }
  return text || key
}
