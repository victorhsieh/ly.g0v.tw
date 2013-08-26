angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/about.html', [
'<div class="about"><h1>This is pre-alpha!</h1></div><h2>Icon attributions</h2><ul class="attribution"><li><a href="http://thenounproject.com/noun/judge/#icon-No3953" target="_blank">Judge</a>designed by<a href="http://thenounproject.com/Luis" target="_blank">Luis Prado</a>from The Noun Project</li><li><a href="http://thenounproject.com/noun/antenna/#icon-No10279" target="_blank">Antenna</a>designed by<a href="http://thenounproject.com/rocavence" target="_blank">Roca Chang</a>from The Noun Project</li><li><a href="http://thenounproject.com/noun/earth/#icon-No4570" target="_blank">Earth</a>designed by<a href="http://thenounproject.com/thibault.geffroy" target="_blank">Thibault Geffroy</a>from The Noun Project</li><li><a href="http://thenounproject.com/noun/institution/#icon-No1564" target="_blank">Institution</a>designed by<a href="http://thenounproject.com/thibault.geffroy" target="_blank">Thibault Geffroy</a>from The Noun Project</li></ul>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/bill.html', [
'<div class="bill"><h1 title="{{summary}}">{{summary}}</h1><div ng-show="committee" class="role committee"><ul><li ng-repeat="c in committee"><span><img ng-src="http://avatars.io/50a65bb26e293122b0000073/committee-{{c.abbr}}?size=medium" ng-alt="{{c.name}}" ng-class="{{c.abbr}}" class="avatar medium"/><span class="name">{{c.name}}委員會</span></span></li></ul></div><div ng-show="proposal" class="role proposal"><h2>提案人</h2><ul><li ng-repeat="e in proposal"><span><img ng-src="http://avatars.io/50a65bb26e293122b0000073/{{e.avatar}}?size=medium" ng-alt="{{e.name}}" ng-class="e.party" class="avatar medium"/><span class="name">{{e.name}}</span></span></li></ul></div><div class="description"><p>{{abstract}}</p></div><div ng-show="petition" class="role petition"><h2>連署人</h2><ul><li ng-repeat="e in petition"><span><img ng-src="http://avatars.io/50a65bb26e293122b0000073/{{e.avatar}}?size=small" ng-alt="{{e.name}}" ng-class="e.party" class="avatar"/><span class="name">{{e.name}}</span></span></li></ul></div><div class="clearfix"></div><div class="history"></div><div class="clearfix"></div><div ng-show="related" class="related"><ul><li ng-repeat="r in related"><span><img ng-show="r.avatar" ng-src="http://avatars.io/50a65bb26e293122b0000073/{{r.avatar}}?size=small" ng-alt="{{r.name}}" ng-class="r.party" class="avatar"/><span class="summary">{{r.summary}}</span></span></li></ul></div><div class="clearfix"></div><div ng-repeat="(i, d) in diff" class="content default"><h2>{{d.name}}</h2><table class="diff legend"><th><td class="delete">{{d.diffbase}}</td><td>vs</td><td ng-repeat="v in d.versions" ng-class="{insert: v == d.diffnew}" ng-bind="v" ng-click="setDiff(d, v)" class="version"></td></th></table><ul class="lawdiff"><li ng-repeat="e in d.diffcontent"><div ng-bind-html-unsafe="e.diff" class="diff"></div><div ng-bind-html-unsafe="e.comment" class="comment"></div></li></ul></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/calendar.html', [
'<div ng-controller="LYCalendar" ngx-resize="ngx-resize" class="calendar"><div class="time">立法院行程：<select ng-model="weeks" ng-options="o.label for o in weeksOpts" ng-change="update()"></select></div><div ng-app="ngGrid" ng-grid="gridOptions" class="grid"></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/debates.html', [
'<div ng-controller="LYDebates" ngx-resize="ngx-resize" class="debates"><div ng-grid="gridOptions" class="grid"></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/motions.html', [
'<div ng-class="{list: sitting}" class="motions"><h1><a href="/motions/{{session}}">第八屆第二會期</a></h1><div ng-hide="sitting" class="row-fluid"><div class="span10 chart"></div><div class="span2 legends"></div></div><button id="btnTop" ng-controller="topBtnCtrl" ng-show="showBtn" ng-click="jumpToTop()" class="btn">Jump to Top</button><div ng-show="sitting" class="list"><h2>第 {{sitting}} 次院會</h2><div class="row-fluid"><div class="span2 sidebar"><ul class="nav nav-list"><li ng-repeat="s in allStatus" ng-click="setStatus(s.key)" ng-class="{active: s.key == status}"><a href="#">{{s.value}}</a></li></ul><input ng-model="filter" placeholder="Search" class="filter search-query"/></div><div class="span10 content"><ul class="nav nav-tabs"><li ng-repeat="s in allTypes" ng-click="setType(s.key)" ng-class="{active: s.key == type}"><a href="#">{{s.value}}</a></li></ul><ul ng-class="{{type}}" class="motions"><li ng-repeat="e in entries | filter:{status: status} | filter:filter" class="row"><div class="avatars"><span ng-repeat="avatar in e.avatars"><img ng-src="http://avatars.io/50a65bb26e293122b0000073/{{avatar.avatar}}?size=small" ng-alt="{{avatar.name}}" ng-class="avatar.party" class="avatar"/></span></div><div class="motion"><span class="item">{{ e.item }}</span><span class="proposer">{{ e.proposer }}</span><a ng-href="/bill/{{ e.id }}"><span class="summary">{{ e.summary }}</span></a></div><div class="resolution">{{ e.resolution }}</div></li></ul></div></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/nav.html', [
'<ul class="nav"><li ng-class="getClass(\'/motions\')"><a ng-href="/motions">議案</a></li><li ng-class="getClass(\'/calendar\')"><a ng-href="/calendar">預報</a></li><li ng-class="getClass(\'/sitting\')"><a ng-href="/sitting">院會紀錄</a></li><li ng-class="getClass(\'/debates\')"><a ng-href="/debates">質詢</a></li></ul><ul class="nav pull-right"><li ng-class="getClass(\'/about\')"><a ng-href="/about">關於</a></li><li><a><div data-send="false" data-href="https://facebook.com/g0v.tw" data-width="120" data-layout="button_count" data-show-faces="false" data-font="verdana" class="fb-like"></div></a></li></ul>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/sitting.html', [
'<div ng-controller="LYSitting" class="sittings"></div><div class="row-fluid"><div class="span2 sidebar"><ul class="nav nav-list sidebarnav"><li><a href="#announcement">報告事項</a></li><li><a href="#interpellation">質詢事項</a></li><li ng-repeat="item in interp"><a href="#interpellation-{{item[0][0]}}">{{item[0][0]}}</a></li></ul></div><div class="span10 content"><h1>立法院第 {{meta.ad}} 屆第 {{meta.session}} 會期 第 {{meta.sitting}} 次會議記錄</h1><div class="meta"><p ng-repeat="row in meta.raw">{{row}}</p></div><div class="annoucement"><a data-toggle="collapse" data-target="#annoucement" class="btn pull-right">+</a><h1>報告事項</h1><hr/><div id="annoucement" class="collapse"><section ng-repeat="ann in annoucement">{{ann.subject}}<div ng-repeat="conv in ann.conversation" class="well"><span class="speaker label">{{conv.speaker}}</span><div class="content">{{conv.words}}</div></div></section></div></div><div class="interpellation"><h1>質詢事項<hr/><a data-toggle="collapse" data-target="#interp-answers" class="btn pull-right">+</a><h2>詢答</h2><hr/><section id="interp-answers" class="collapse"><div ng-repeat="answer in interpellation.answers" class="well">{{answer.receiver}} {{answer.words}}</div></section><a data-toggle="collapse" data-target="#interp-questions" class="btn pull-right">+</a><h2>質詢</h2><hr/><section id="interp-questions" class="collapse"><div ng-repeat="question in interpellation.questions" class="well">{{question.asker}} {{question.words}}</div></section><h2>個人質詢</h2><section id="interp-interp"><div ng-class="{well:interp.questioner, collapse:interp.questioner}" ng-repeat="interp in interpellation.interpellations" id="interpellation-{{interp.questioner}}"><a ng-show="interp.questioner" data-toggle="collapse" data-target="#interpellation-{{interp.questioner}}" class="btn pull-right">+</a><h4>{{interp.questioner}}</h4><div ng-repeat="conv in interp.conversation" class="well"><span class="speaker label">{{conv.speaker}}</span><div class="content">{{conv.words}}</div></div></div></section></h1></div></div></div>',''].join("\n"));
}]);