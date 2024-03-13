(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{408:function(t,s,e){"use strict";e.r(s);var a=e(2),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("该篇文章参考 "),s("a",{attrs:{href:"https://xiaolincoding.com/mysql/lock/how_to_lock.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小林 coding"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("我们先了解，MySQL 有哪些锁？分别有什么作用。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cdn.xiaolincoding.com//mysql/other/1e37f6994ef44714aba03b8046b1ace2.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("直接看图"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.xiaolincoding.com//mysql/other/1e37f6994ef44714aba03b8046b1ace2.png",alt:"img"}})]),t._v(" "),s("p",[t._v("我们来关注一下这个 MySQL 中的行级锁，有哪些种类："),s("code",[t._v("Record Lock")]),t._v(" "),s("code",[t._v("Gap Lock")]),t._v(" "),s("code",[t._v("Next-key Lock")])]),t._v(" "),s("p",[t._v("我们是基于 InnoDB 存储引擎的，因为其他比如说 MyISAM 存储引擎也没有行级锁这一个概念。")]),t._v(" "),s("p",[t._v("在了解这个行级锁之前，我们知道，普通的 select 语句是不会对记录加锁的（除了串行化隔离级别），通过 "),s("strong",[t._v("MVCC + 版本链")]),t._v(" 实现的；如果要在查询时对记录加行级锁，可以使用下面的方式：")]),t._v(" "),s("div",{staticClass:"language-SQL line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 对读取的记录加共享锁（S型锁）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 对读取的记录加独占锁（X型锁）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("上面这两条语句必须要在一个事务中，因为当事务提交了，锁就会被释放了，所以当使用上面两个语句的时候要加上 "),s("code",[t._v("begin")]),t._v(" 或者 "),s("code",[t._v("start transaction")]),t._v(" 开启事务的语句。")]),t._v(" "),s("p",[t._v("当然还有 "),s("code",[t._v("update")]),t._v(" 语句以及 "),s("code",[t._v("delete")]),t._v(" 语句都是对记录加独占锁的（即X型锁）")]),t._v(" "),s("div",{staticClass:"language-SQL line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 对操作的记录加独占锁(X型锁)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 对操作的记录加独占锁(X型锁)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("共享锁（S锁）满足"),s("strong",[t._v("读读共享")]),t._v("、"),s("strong",[t._v("读写互斥")]),t._v("；独占锁（X锁）满足"),s("strong",[t._v("写写互斥")]),t._v("、"),s("strong",[t._v("读写互斥")]),t._v("；即一条记录加了 S锁，其他事务也是可以加进行 "),s("code",[t._v("selec")]),t._v("t 读取操作的；但是不可以进行 "),s("code",[t._v("update")]),t._v(" 或者 "),s("code",[t._v("delete")]),t._v(" 操作；")]),t._v(" "),s("h2",{attrs:{id:"行级锁的使用以及作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行级锁的使用以及作用"}},[t._v("#")]),t._v(" 行级锁的使用以及作用")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Record Lock")]),t._v(" "),s("p",[t._v("记录锁，锁住的就是当前该条记录；而记录锁是分 S锁 和 X锁的；当一个事务对一条记录加了 S型记录锁后，其他事务也是可以对这个记录 加S型锁的；但是当一个事务对这个记录加了 X型记录锁后，后面的其他事务既不能对该记录加 S型记录锁也不能对该记录加 X型记录锁；")]),t._v(" "),s("p",[s("code",[t._v("commit")]),t._v(" 之后，事务过程中生成的锁都会被释放；")])]),t._v(" "),s("li",[s("p",[t._v("Gap Lock")]),t._v(" "),s("p",[t._v("间隙锁，只存在于可重复读隔离级别，"),s("strong",[t._v("目的是为了解决可重复读隔离级别下的幻读现象；")])]),t._v(" "),s("p",[t._v("表中有一个范围 id 为（3，5）间隙锁，那么其他事务就无法插入 id = 4 这条记录了，这样就有效的防止幻读现象的发生。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E9%94%81/gap%E9%94%81.drawio.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("如图"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E9%94%81/gap%E9%94%81.drawio.png",alt:"img"}})]),t._v(" "),s("p",[t._v("间隙锁存在 X型锁和 S型锁，但是并没有区别，间隙锁之间是可以兼容的，即"),s("strong",[t._v("两个事务可以同时持有包含共同间隙范围的间隙锁，并不存在互斥关系，因为间隙锁的目的是防止插入幻读记录而提出的。")])])]),t._v(" "),s("li",[s("p",[t._v("Next-Key Lock")]),t._v(" "),s("p",[t._v("临键锁，是 Record Lock + Gap Lock 的组合，锁定一个范围，并且锁定记录本身。")]),t._v(" "),s("p",[t._v("假设，表中有一个范围 id 为（3，5] 的 next-key lock，那么其他事务即不能插入 id = 4 记录，也不能修改和删除 id = 5 这条记录。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E9%94%81/%E4%B8%B4%E9%94%AE%E9%94%81.drawio.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("如图"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E9%94%81/%E4%B8%B4%E9%94%AE%E9%94%81.drawio.png",alt:"img"}})]),t._v(" "),s("p",[t._v("所以，next-key lock 既能保护该记录，还能阻止其他事务将新纪录插入被保护记录前面的间隙中；")]),t._v(" "),s("p",[t._v("next-key Lock 是包含间隙锁 + 记录锁的，如果一个事务获取了 X型的 next-key Lock，那么另外一个事务在获取相同范围的 X型的 next-key Lock 时，是会被阻塞的。")])])]),t._v(" "),s("h2",{attrs:{id:"mysql-是怎么加行级锁的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-是怎么加行级锁的"}},[t._v("#")]),t._v(" MySQL 是怎么加行级锁的？")]),t._v(" "),s("p",[t._v("数据库表语句：")]),t._v(" "),s("div",{staticClass:"language-SQL line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLLATE")]),t._v(" utf8mb4_unicode_ci "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("index_age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BTREE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8mb4 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLLATE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8mb4_unicode_ci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("ul",[s("li",[s("p",[t._v("唯一索引的等值查询")]),t._v(" "),s("p",[t._v("先说结论：")]),t._v(" "),s("ul",[s("li",[t._v("当查询的记录是【存在】的，在索引树上定位到这一条记录后，将该记录的索引中的 next-key Lock "),s("strong",[t._v("退化成【记录锁】")]),t._v("；")]),t._v(" "),s("li",[t._v("当查询的记录是【不存在】的，在索引树上定位到这一条记录后，将该记录的索引中的 next-key Lock "),s("strong",[t._v("退化成【间隙锁】")]),t._v("。")]),t._v(" "),s("li",[t._v("注意，这里的唯一索引不是二级索引的唯一索引，这里的唯一索引是就是我们的主键索引，所以加锁只会加在我们的主键索引项上，如果我们这个唯一索引是一个二级索引，那么他还会给我们的主键索引加锁~")])]),t._v(" "),s("p",[t._v("问题来了：为什么在唯一索引等值查询并且查询记录存在的场景下，仅靠记录锁也能避免幻读的问题？")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/spicy-hot-without-spicy/save-picture/raw/master/MySQL%20%E9%94%81/1697874603418.jpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片展示"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("我们首先要清楚，临键锁的作用是啥？InnoDB 存储引擎在可重复读的隔离级别下，为了避免幻读而产生的；幻读就是前后读取的数据的条数不一致嘛；那我们来分析：")]),t._v(" "),s("ul",[s("li",[t._v("由于主键具有唯一性，所以"),s("strong",[t._v("其他事务插入 id = 1 的时候，会因为主键冲突，导致无法插入 id = 1 的新纪录")]),t._v("。这样事务 A 在多次查询 id = 1 的时候，不会出现前后两次的结果集不同，也就避免幻读问题；")]),t._v(" "),s("li",[t._v("由于对 id = 1 加了记录锁，"),s("strong",[t._v("其他事务无法进行删除操作（会被阻塞）")]),t._v("，这样事务 A 在多次查询 id = 1的记录的时候，不会出现前后两次的结果集不同，也就避免幻读问题；")])]),t._v(" "),s("p",[t._v("问题又来了：为什么在唯一索引等值查询但是查询记录不存在的场景下，仅靠间隙锁也能避免幻读的问题？")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/spicy-hot-without-spicy/save-picture/raw/master/MySQL%20%E9%94%81/1697875240266.jpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片展示"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("为什么 id = 5 记录上的主键索引的锁不可以是 next-key Lock？如果是 next-key Lock，那么 id = 5 的该条记录是不可以删除的，但是本次查询的是 id = 2 的记录呀，我们只需要保证查不到 id = 2 的记录就行，至于 id = 5 的记录我们是不需要进行管理的，所以说，只需要间隙锁就可以避免这个幻读的现象了；")]),t._v(" "),s("li",[t._v("那为什么不可以对不存在的记录加锁？"),s("strong",[t._v("锁是加在索引上的")]),t._v("，而这个场景下的记录是不存在的，自然没有对应的索引给你加锁啦~")])])]),t._v(" "),s("li",[s("p",[t._v("唯一索引的范围查询")]),t._v(" "),s("p",[t._v("这个就很复杂了；先说结论：当唯一索引进行范围查询时，会对每一个扫描到的索引加 next-key 锁，然后如果遇到下面的情况，会退化成间隙锁或者是记录锁：")]),t._v(" "),s("ul",[s("li",[t._v("情况一：针对【大于等于】的范围查询，因为存在等值查询的条件，那么如果等值查询的记录只存在于表中，那么该记录的索引的 "),s("strong",[t._v("next-key Lock 锁会退化成记录锁")]),t._v("；")]),t._v(" "),s("li",[t._v("情况二：。。。。看下面解释就懂了，不需要记这个结论。")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("实验一：针对【大于】的范围查询的情况")]),t._v(" "),s("div",{staticClass:"language-SQL line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("该事务加锁变化如下：")]),t._v(" "),s("ol",[s("li",[t._v("最开始要找的第一行是 id = 20，由于查询该记录不是一个等值查询（不是大于等于条件查询），所以该主键索引加的范围是(15, 20]的 next-key Lock；")]),t._v(" "),s("li",[t._v("由于范围查询，就会继续往后查找存在的记录，虽然我们看见最后一条记录 id = 20 的记录，但是实际在 InnoDB 存储引擎中，会用一个特殊的记录来标识最后一条记录，该特殊的记录的名字叫 supremum pseudo-record ，所以扫描第二行的时候，也就扫描到了这个特殊记录的时候，会对该主键索引加的是范围为 (20, +∞] 的 next-key 锁。")]),t._v(" "),s("li",[t._v("停止扫描；")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2%E5%A4%A7%E4%BA%8E15.drawio.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("如图："),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2%E5%A4%A7%E4%BA%8E15.drawio.png",alt:"img"}})]),t._v(" "),s("p",[t._v("加锁查看：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/spicy-hot-without-spicy/save-picture/raw/master/MySQL%20%E9%94%81/1697875299143.jpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片展示"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("实验一：针对【大于等于】的范围查询的情况")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("当执行了上述语句后，其他事务就没办法对该进行 增删改 操作了；")]),t._v(" "),s("p",[t._v("该事务加锁变化过程：")]),t._v(" "),s("ol",[s("li",[t._v("最开始要找的第一行是 id = 15，"),s("strong",[t._v("由于查询记录是一个等值查询")]),t._v("，所以该主键索引的 next-key Lock 锁会退化成记录锁，也就是仅锁住 id = 15 这一行记录。")]),t._v(" "),s("li",[t._v("其他的和 【大于】的情况一样了；")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2%E5%A4%A7%E4%BA%8E%E7%AD%89%E4%BA%8E15.drawio.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("如图："),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2%E5%A4%A7%E4%BA%8E%E7%AD%89%E4%BA%8E15.drawio.png",alt:"img"}})]),t._v(" "),s("p",[t._v("加锁查看：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/spicy-hot-without-spicy/save-picture/raw/master/MySQL%20%E9%94%81/1697875342217.jpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片展示"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("实验三：针对【小于或者小于等于】的范围查询")]),t._v(" "),s("p",[t._v("我们先来看【小于】的范围查询时，查询条件值的记录【不存在】表中的情况")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("该事务的加锁过程：")]),t._v(" "),s("ol",[s("li",[t._v("最开始要找的第一行是 id = 1，于是对该主键索引加的是范围为 (-∞, 1] 的 next-key 锁；")]),t._v(" "),s("li",[t._v("继续找，找到 id = 5，对这个主键索引加的是范围为 (1, 5] 临键锁；")]),t._v(" "),s("li",[t._v("由于扫描到的第二行记录（id = 5），满足 id < 6 条件，而且也没有达到种植扫描的条件，所以会继续扫描；")]),t._v(" "),s("li",[t._v("扫描到的第三行记录是 id = 10，该记录不满足 id < 6 条件的记录，所以 id = 10 这一行记录的锁会退化成间隙锁；")]),t._v(" "),s("li",[t._v("由于扫描到的第三行记录（id = 10），不满足 id < 6 条件，达到了终止扫描的条件，于是停止扫描。")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2%E5%B0%8F%E4%BA%8E%E7%AD%89%E4%BA%8E6.drawio.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("如图："),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2%E5%B0%8F%E4%BA%8E%E7%AD%89%E4%BA%8E6.drawio.png",alt:"img"}})]),t._v(" "),s("p",[t._v("加锁情况：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/spicy-hot-without-spicy/save-picture/raw/master/MySQL%20%E9%94%81/1697875380205.jpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片展示"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("针对【小于等于】的范围查询时，查询条件值的记录【存在】表中的情况。")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("该事务加锁过程：")]),t._v(" "),s("p",[t._v("可以自己推了。。。。不写了")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2%E5%B0%8F%E4%BA%8E%E7%AD%89%E4%BA%8E5.drawio.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("如图："),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2%E5%B0%8F%E4%BA%8E%E7%AD%89%E4%BA%8E5.drawio.png",alt:"img"}})]),t._v(" "),s("p",[t._v("加锁情况：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/spicy-hot-without-spicy/save-picture/raw/master/MySQL%20%E9%94%81/1697875434965.jpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片展示"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("针对【小于等于】的范围查询时，查询条件值的记录【存在】表中的情况。")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("事务加锁情况：")]),t._v(" "),s("p",[t._v("不赘述了。。。可以推出来")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2%E5%B0%8F%E4%BA%8E5.drawio.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("如图："),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2%E5%B0%8F%E4%BA%8E5.drawio.png",alt:"img"}})]),t._v(" "),s("p",[t._v("加锁情况：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/spicy-hot-without-spicy/save-picture/raw/master/MySQL%20%E9%94%81/1697875453045.jpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片展示"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[s("strong",[t._v("总结")]),t._v("：上面的实验都是为了验证加的锁都是为了防止发生幻读的场景的，以这个核心思想去理解就可以了，不需要死记硬背的。")])]),t._v(" "),s("li",[s("p",[t._v("非唯一索引的等值查询")]),t._v(" "),s("p",[t._v("先说结论："),s("strong",[t._v("当我们用非唯一索引进行等值查询的时候，因为存在两个索引，一个是主键索引，一个是非主键索引，所以在加锁时，同时会对这两个索引都加锁，但是对主键索引加锁的时候，只有满足查询条件的记录才会对他们的主键索引进行加锁。")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("实验一：针对非唯一索引等值查询时，查询的值不存在的情况")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("事务加锁情况：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("定位到第一条不符合查询条件的二级索引记录")]),t._v("，即扫描到了 age = 39，于是该二级索引的 next-key 锁会"),s("strong",[t._v("退化成间隙锁")]),t._v("，范围是(22, 39]；")]),t._v(" "),s("li",[t._v("停止查询")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E9%9D%9E%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E7%AD%89%E5%80%BC%E6%9F%A5%E8%AF%A2age=25.drawio.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("如图："),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E9%9D%9E%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E7%AD%89%E5%80%BC%E6%9F%A5%E8%AF%A2age=25.drawio.png",alt:"img"}})]),t._v(" "),s("p",[t._v("加锁情况：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/spicy-hot-without-spicy/save-picture/raw/master/MySQL%20%E9%94%81/1697875531790.jpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片展示"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("这里有一个问题：对于插入 age = 22 和 age = 39 记录的语句中，在一些情况是可以插入成功的，而一些情况是没法成功插入，具体是哪种情况呢？")]),t._v(" "),s("p",[t._v("我们直接摊牌：插入 age = 22 记录的成功和失败的情况如下：")]),t._v(" "),s("ul",[s("li",[t._v("当其他事务插入一条 age = 22，id = 3 的记录的时候，在二级索引树上定位到插入的位置，而"),s("strong",[t._v("该位置的下一条是 age = 22，id = 10 的记录，该记录二级索引上没有间隙锁，所以这条插入记录可以执行的；")])]),t._v(" "),s("li",[t._v("当其他事务插入一条 age = 22，id = 12 的记录的时候，在二级索引树上定位到插入的位置，而"),s("strong",[t._v("该位置的下一条是 age = 39，id = 20 的记录，该记录二级索引上有间隙锁，所以这条插入记录不可以执行的；")])])]),t._v(" "),s("p",[t._v("插入 age = 39 记录的成功和失败的情况：")]),t._v(" "),s("ul",[s("li",[t._v("当其他事务插入一条 age = 39，id = 21 的记录的时候，在二级索引树上定位到插入的位置，而"),s("strong",[t._v("该位置的下一条记录不存在，该记录二级索引上没有间隙锁，所以这条插入记录可以执行的；")])]),t._v(" "),s("li",[t._v("当其他事务插入一条 age = 39，id = 3 的记录的时候，在二级索引树上定位到插入的位置，而"),s("strong",[t._v("该位置的下一条是 age = 39，id = 20 的记录，该记录二级索引上没有间隙锁，所以这条插入记录可以执行的；")])])]),t._v(" "),s("p",[t._v("所以我们的得出一个"),s("strong",[t._v("重要的结论")]),t._v("：当有一个事务持有二级索引的间隙锁（22，39）时，插入 age = 22 或者 age = 39 记录的语句是否可以执行成功，关键还要考虑插入记录的主键值，因为【二级索引值（age列）+ 主键值（id列）】才可以确定插入的位置，确定了插入的位置后，就要看插入的位置的下一条记录是否有间隙锁，如果有间隙锁，就会发生阻塞，如果没有间隙锁，就执行成功。")]),t._v(" "),s("p",[t._v("所以我们再看上面那个图中 Lock_DATA 字段：那个 20 的含义代表的是主键值。")])]),t._v(" "),s("li",[s("p",[t._v("实验二：针对非唯一索引等值查询时，查询的值存在的情况")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("事务加锁情况：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("由于不是唯一索引，所以肯定存在值相同的记录，于是非唯一索引等值查询是一个扫描的过程，")]),t._v(" 最开始要找的第一行是 age = 22，于是对该二级索引记录加上范围为 (21, 22] 的 next-key 锁。同时，因为 age = 22 符合查询条件，于是对 age = 22 的记录的主键索引加上记录锁，即对 id = 10 这一行加记录锁。")]),t._v(" "),s("li",[t._v("接着继续扫描，扫描到的第二行是 age = 39，该记录是第一个不符合条件的二级索引记录，所以该二级索引的 next-key 锁会"),s("strong",[t._v("退化成间隙锁")]),t._v("，范围是 (22, 39)。")]),t._v(" "),s("li",[t._v("停止扫描。")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E9%9D%9E%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E7%AD%89%E5%80%BC%E6%9F%A5%E8%AF%A2%E5%AD%98%E5%9C%A8.drawio.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("如图："),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E9%9D%9E%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E7%AD%89%E5%80%BC%E6%9F%A5%E8%AF%A2%E5%AD%98%E5%9C%A8.drawio.png",alt:"img"}})]),t._v(" "),s("p",[t._v("加锁情况：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/spicy-hot-without-spicy/save-picture/raw/master/MySQL%20%E9%94%81/1697875561630.jpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片展示"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("这里有一些问题：是否可以插入 age = 21 的新纪录？是否可以插入 age = 22 的新纪录？是否可以插入 age = 39 的新纪录？这些问题都是可以根据上面一个实验中【对于插入 age = 22 和 age = 39 记录的语句中，在一些情况是可以插入成功的，而一些情况是没法成功插入，具体是哪种情况呢？】来进行解答。反正记住："),s("strong",[t._v("核心就是不能出现幻读。")])])])])]),t._v(" "),s("li",[s("p",[t._v("非唯一索引的范围查询")]),t._v(" "),s("p",[t._v("先说结论："),s("strong",[t._v("非唯一索引范围查询，索引的 next-key lock 不会有退化为间隙锁和记录锁的情况")]),t._v("。也就是非唯一索引进行范围查询时，对二级索引记录加锁都是加 next-key Lock 锁；")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("实验一")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("a",{attrs:{href:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E9%9D%9E%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2age%E5%A4%A7%E4%BA%8E%E7%AD%89%E4%BA%8E22.drawio.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("加锁如图："),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E8%A1%8C%E7%BA%A7%E9%94%81/%E9%9D%9E%E5%94%AF%E4%B8%80%E7%B4%A2%E5%BC%95%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2age%E5%A4%A7%E4%BA%8E%E7%AD%89%E4%BA%8E22.drawio.png",alt:"img"}})]),t._v(" "),s("p",[t._v("加锁情况：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/spicy-hot-without-spicy/save-picture/raw/master/MySQL%20%E9%94%81/1697875616094.jpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片展示"),s("OutboundLink")],1)])])])]),t._v(" "),s("li",[s("p",[t._v("没有加索引的查询")]),t._v(" "),s("p",[s("strong",[t._v("如果锁定读查询语句，没有使用索引列作为查询条件，或者查询条件没有走索引查询，导致扫描的是全表扫描，那么每一条记录的索引上都会加 next-key Lock 锁，就相当于锁住全表了，这是如果其他事务对表进行增删改操作都会被阻塞！")]),t._v(" 很严重的。")]),t._v(" "),s("p",[s("strong",[t._v("在线上在执行 update、delete、select ... for update 等具有加锁性质的语句，一定要检查语句是否走了索引，如果是全表扫描的话，会对每一个索引加 next-key 锁，相当于把整个表锁住了")])])])]),t._v(" "),s("p",[t._v("补充："),s("code",[t._v("Insert")]),t._v(" 语句是如何加这个行级锁的？")])])}),[],!1,null,null,null);s.default=r.exports}}]);