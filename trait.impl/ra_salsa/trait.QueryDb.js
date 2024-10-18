(function() {
    var implementors = Object.fromEntries([["base_db",[["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"base_db/struct.CompressedFileTextQuery.html\" title=\"struct base_db::CompressedFileTextQuery\">CompressedFileTextQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"base_db/struct.CrateGraphQuery.html\" title=\"struct base_db::CrateGraphQuery\">CrateGraphQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"base_db/struct.CrateWorkspaceDataQuery.html\" title=\"struct base_db::CrateWorkspaceDataQuery\">CrateWorkspaceDataQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"base_db/struct.FileSourceRootQuery.html\" title=\"struct base_db::FileSourceRootQuery\">FileSourceRootQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"base_db/struct.FileTextQuery.html\" title=\"struct base_db::FileTextQuery\">FileTextQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"base_db/struct.ParseErrorsQuery.html\" title=\"struct base_db::ParseErrorsQuery\">ParseErrorsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"base_db/struct.ParseQuery.html\" title=\"struct base_db::ParseQuery\">ParseQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"base_db/struct.SourceRootCratesQuery.html\" title=\"struct base_db::SourceRootCratesQuery\">SourceRootCratesQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"base_db/struct.SourceRootQuery.html\" title=\"struct base_db::SourceRootQuery\">SourceRootQuery</a>"]]],["hir_def",[["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.AttrsQuery.html\" title=\"struct hir_def::db::AttrsQuery\">AttrsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.BlockDefMapQuery.html\" title=\"struct hir_def::db::BlockDefMapQuery\">BlockDefMapQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.BlockItemTreeQuery.html\" title=\"struct hir_def::db::BlockItemTreeQuery\">BlockItemTreeQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.BodyQuery.html\" title=\"struct hir_def::db::BodyQuery\">BodyQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.BodyWithSourceMapQuery.html\" title=\"struct hir_def::db::BodyWithSourceMapQuery\">BodyWithSourceMapQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.ConstDataQuery.html\" title=\"struct hir_def::db::ConstDataQuery\">ConstDataQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.ConstVisibilityQuery.html\" title=\"struct hir_def::db::ConstVisibilityQuery\">ConstVisibilityQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.CrateDefMapQuery.html\" title=\"struct hir_def::db::CrateDefMapQuery\">CrateDefMapQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.CrateLangItemsQuery.html\" title=\"struct hir_def::db::CrateLangItemsQuery\">CrateLangItemsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.CrateNotableTraitsQuery.html\" title=\"struct hir_def::db::CrateNotableTraitsQuery\">CrateNotableTraitsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.CrateSupportsNoStdQuery.html\" title=\"struct hir_def::db::CrateSupportsNoStdQuery\">CrateSupportsNoStdQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.EnumDataQuery.html\" title=\"struct hir_def::db::EnumDataQuery\">EnumDataQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.EnumVariantDataWithDiagnosticsQuery.html\" title=\"struct hir_def::db::EnumVariantDataWithDiagnosticsQuery\">EnumVariantDataWithDiagnosticsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.ExpandProcAttrMacrosQuery.html\" title=\"struct hir_def::db::ExpandProcAttrMacrosQuery\">ExpandProcAttrMacrosQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.ExprScopesQuery.html\" title=\"struct hir_def::db::ExprScopesQuery\">ExprScopesQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.ExternCrateDeclDataQuery.html\" title=\"struct hir_def::db::ExternCrateDeclDataQuery\">ExternCrateDeclDataQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.FieldVisibilitiesQuery.html\" title=\"struct hir_def::db::FieldVisibilitiesQuery\">FieldVisibilitiesQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.FieldsAttrsQuery.html\" title=\"struct hir_def::db::FieldsAttrsQuery\">FieldsAttrsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.FieldsAttrsSourceMapQuery.html\" title=\"struct hir_def::db::FieldsAttrsSourceMapQuery\">FieldsAttrsSourceMapQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.FileItemTreeQuery.html\" title=\"struct hir_def::db::FileItemTreeQuery\">FileItemTreeQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.FunctionDataQuery.html\" title=\"struct hir_def::db::FunctionDataQuery\">FunctionDataQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.FunctionVisibilityQuery.html\" title=\"struct hir_def::db::FunctionVisibilityQuery\">FunctionVisibilityQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.GenericParamsQuery.html\" title=\"struct hir_def::db::GenericParamsQuery\">GenericParamsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.ImplDataWithDiagnosticsQuery.html\" title=\"struct hir_def::db::ImplDataWithDiagnosticsQuery\">ImplDataWithDiagnosticsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.ImportMapQuery.html\" title=\"struct hir_def::db::ImportMapQuery\">ImportMapQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.IncludeMacroInvocQuery.html\" title=\"struct hir_def::db::IncludeMacroInvocQuery\">IncludeMacroInvocQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternAnonymousConstLookupQuery.html\" title=\"struct hir_def::db::InternAnonymousConstLookupQuery\">InternAnonymousConstLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternAnonymousConstQuery.html\" title=\"struct hir_def::db::InternAnonymousConstQuery\">InternAnonymousConstQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternBlockLookupQuery.html\" title=\"struct hir_def::db::InternBlockLookupQuery\">InternBlockLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternBlockQuery.html\" title=\"struct hir_def::db::InternBlockQuery\">InternBlockQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternConstLookupQuery.html\" title=\"struct hir_def::db::InternConstLookupQuery\">InternConstLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternConstQuery.html\" title=\"struct hir_def::db::InternConstQuery\">InternConstQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternEnumLookupQuery.html\" title=\"struct hir_def::db::InternEnumLookupQuery\">InternEnumLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternEnumQuery.html\" title=\"struct hir_def::db::InternEnumQuery\">InternEnumQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternEnumVariantLookupQuery.html\" title=\"struct hir_def::db::InternEnumVariantLookupQuery\">InternEnumVariantLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternEnumVariantQuery.html\" title=\"struct hir_def::db::InternEnumVariantQuery\">InternEnumVariantQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternExternBlockLookupQuery.html\" title=\"struct hir_def::db::InternExternBlockLookupQuery\">InternExternBlockLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternExternBlockQuery.html\" title=\"struct hir_def::db::InternExternBlockQuery\">InternExternBlockQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternExternCrateLookupQuery.html\" title=\"struct hir_def::db::InternExternCrateLookupQuery\">InternExternCrateLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternExternCrateQuery.html\" title=\"struct hir_def::db::InternExternCrateQuery\">InternExternCrateQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternFunctionLookupQuery.html\" title=\"struct hir_def::db::InternFunctionLookupQuery\">InternFunctionLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternFunctionQuery.html\" title=\"struct hir_def::db::InternFunctionQuery\">InternFunctionQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternImplLookupQuery.html\" title=\"struct hir_def::db::InternImplLookupQuery\">InternImplLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternImplQuery.html\" title=\"struct hir_def::db::InternImplQuery\">InternImplQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternInTypeConstLookupQuery.html\" title=\"struct hir_def::db::InternInTypeConstLookupQuery\">InternInTypeConstLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternInTypeConstQuery.html\" title=\"struct hir_def::db::InternInTypeConstQuery\">InternInTypeConstQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternMacro2LookupQuery.html\" title=\"struct hir_def::db::InternMacro2LookupQuery\">InternMacro2LookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternMacro2Query.html\" title=\"struct hir_def::db::InternMacro2Query\">InternMacro2Query</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternMacroRulesLookupQuery.html\" title=\"struct hir_def::db::InternMacroRulesLookupQuery\">InternMacroRulesLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternMacroRulesQuery.html\" title=\"struct hir_def::db::InternMacroRulesQuery\">InternMacroRulesQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternProcMacroLookupQuery.html\" title=\"struct hir_def::db::InternProcMacroLookupQuery\">InternProcMacroLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternProcMacroQuery.html\" title=\"struct hir_def::db::InternProcMacroQuery\">InternProcMacroQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternStaticLookupQuery.html\" title=\"struct hir_def::db::InternStaticLookupQuery\">InternStaticLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternStaticQuery.html\" title=\"struct hir_def::db::InternStaticQuery\">InternStaticQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternStructLookupQuery.html\" title=\"struct hir_def::db::InternStructLookupQuery\">InternStructLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternStructQuery.html\" title=\"struct hir_def::db::InternStructQuery\">InternStructQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternTraitAliasLookupQuery.html\" title=\"struct hir_def::db::InternTraitAliasLookupQuery\">InternTraitAliasLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternTraitAliasQuery.html\" title=\"struct hir_def::db::InternTraitAliasQuery\">InternTraitAliasQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternTraitLookupQuery.html\" title=\"struct hir_def::db::InternTraitLookupQuery\">InternTraitLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternTraitQuery.html\" title=\"struct hir_def::db::InternTraitQuery\">InternTraitQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternTypeAliasLookupQuery.html\" title=\"struct hir_def::db::InternTypeAliasLookupQuery\">InternTypeAliasLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternTypeAliasQuery.html\" title=\"struct hir_def::db::InternTypeAliasQuery\">InternTypeAliasQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternUnionLookupQuery.html\" title=\"struct hir_def::db::InternUnionLookupQuery\">InternUnionLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternUnionQuery.html\" title=\"struct hir_def::db::InternUnionQuery\">InternUnionQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternUseLookupQuery.html\" title=\"struct hir_def::db::InternUseLookupQuery\">InternUseLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.InternUseQuery.html\" title=\"struct hir_def::db::InternUseQuery\">InternUseQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.LangItemQuery.html\" title=\"struct hir_def::db::LangItemQuery\">LangItemQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.Macro2DataQuery.html\" title=\"struct hir_def::db::Macro2DataQuery\">Macro2DataQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.MacroDefQuery.html\" title=\"struct hir_def::db::MacroDefQuery\">MacroDefQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.MacroRulesDataQuery.html\" title=\"struct hir_def::db::MacroRulesDataQuery\">MacroRulesDataQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.NotableTraitsInDepsQuery.html\" title=\"struct hir_def::db::NotableTraitsInDepsQuery\">NotableTraitsInDepsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.ProcMacroDataQuery.html\" title=\"struct hir_def::db::ProcMacroDataQuery\">ProcMacroDataQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.StaticDataQuery.html\" title=\"struct hir_def::db::StaticDataQuery\">StaticDataQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.StructDataWithDiagnosticsQuery.html\" title=\"struct hir_def::db::StructDataWithDiagnosticsQuery\">StructDataWithDiagnosticsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.TraitAliasDataQuery.html\" title=\"struct hir_def::db::TraitAliasDataQuery\">TraitAliasDataQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.TraitDataWithDiagnosticsQuery.html\" title=\"struct hir_def::db::TraitDataWithDiagnosticsQuery\">TraitDataWithDiagnosticsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.TypeAliasDataQuery.html\" title=\"struct hir_def::db::TypeAliasDataQuery\">TypeAliasDataQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_def/db/struct.UnionDataWithDiagnosticsQuery.html\" title=\"struct hir_def::db::UnionDataWithDiagnosticsQuery\">UnionDataWithDiagnosticsQuery</a>"]]],["hir_expand",[["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.AstIdMapQuery.html\" title=\"struct hir_expand::db::AstIdMapQuery\">AstIdMapQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.DeclMacroExpanderQuery.html\" title=\"struct hir_expand::db::DeclMacroExpanderQuery\">DeclMacroExpanderQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.ExpandProcMacroQuery.html\" title=\"struct hir_expand::db::ExpandProcMacroQuery\">ExpandProcMacroQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.InternMacroCallLookupQuery.html\" title=\"struct hir_expand::db::InternMacroCallLookupQuery\">InternMacroCallLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.InternMacroCallQuery.html\" title=\"struct hir_expand::db::InternMacroCallQuery\">InternMacroCallQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.InternSyntaxContextLookupQuery.html\" title=\"struct hir_expand::db::InternSyntaxContextLookupQuery\">InternSyntaxContextLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.InternSyntaxContextQuery.html\" title=\"struct hir_expand::db::InternSyntaxContextQuery\">InternSyntaxContextQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.MacroArgQuery.html\" title=\"struct hir_expand::db::MacroArgQuery\">MacroArgQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.ParseMacroExpansionErrorQuery.html\" title=\"struct hir_expand::db::ParseMacroExpansionErrorQuery\">ParseMacroExpansionErrorQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.ParseMacroExpansionQuery.html\" title=\"struct hir_expand::db::ParseMacroExpansionQuery\">ParseMacroExpansionQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.ProcMacroSpanQuery.html\" title=\"struct hir_expand::db::ProcMacroSpanQuery\">ProcMacroSpanQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.ProcMacrosQuery.html\" title=\"struct hir_expand::db::ProcMacrosQuery\">ProcMacrosQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_expand/db/struct.RealSpanMapQuery.html\" title=\"struct hir_expand::db::RealSpanMapQuery\">RealSpanMapQuery</a>"]]],["hir_ty",[["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.AdtDatumQuery.html\" title=\"struct hir_ty::db::AdtDatumQuery\">AdtDatumQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.AdtVarianceQuery.html\" title=\"struct hir_ty::db::AdtVarianceQuery\">AdtVarianceQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.AssociatedTyDataQuery.html\" title=\"struct hir_ty::db::AssociatedTyDataQuery\">AssociatedTyDataQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.AssociatedTyValueQuery.html\" title=\"struct hir_ty::db::AssociatedTyValueQuery\">AssociatedTyValueQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.BorrowckQuery.html\" title=\"struct hir_ty::db::BorrowckQuery\">BorrowckQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.CallableItemSignatureQuery.html\" title=\"struct hir_ty::db::CallableItemSignatureQuery\">CallableItemSignatureQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.ConstEvalDiscriminantQuery.html\" title=\"struct hir_ty::db::ConstEvalDiscriminantQuery\">ConstEvalDiscriminantQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.ConstEvalQuery.html\" title=\"struct hir_ty::db::ConstEvalQuery\">ConstEvalQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.ConstEvalStaticQuery.html\" title=\"struct hir_ty::db::ConstEvalStaticQuery\">ConstEvalStaticQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.ConstParamTyQuery.html\" title=\"struct hir_ty::db::ConstParamTyQuery\">ConstParamTyQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.DynCompatibilityOfTraitQuery.html\" title=\"struct hir_ty::db::DynCompatibilityOfTraitQuery\">DynCompatibilityOfTraitQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.FieldTypesQuery.html\" title=\"struct hir_ty::db::FieldTypesQuery\">FieldTypesQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.FnDefDatumQuery.html\" title=\"struct hir_ty::db::FnDefDatumQuery\">FnDefDatumQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.FnDefVarianceQuery.html\" title=\"struct hir_ty::db::FnDefVarianceQuery\">FnDefVarianceQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.GenericDefaultsQuery.html\" title=\"struct hir_ty::db::GenericDefaultsQuery\">GenericDefaultsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.GenericPredicatesForParamQuery.html\" title=\"struct hir_ty::db::GenericPredicatesForParamQuery\">GenericPredicatesForParamQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.GenericPredicatesQuery.html\" title=\"struct hir_ty::db::GenericPredicatesQuery\">GenericPredicatesQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.GenericPredicatesWithoutParentQuery.html\" title=\"struct hir_ty::db::GenericPredicatesWithoutParentQuery\">GenericPredicatesWithoutParentQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.ImplDatumQuery.html\" title=\"struct hir_ty::db::ImplDatumQuery\">ImplDatumQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.ImplSelfTyQuery.html\" title=\"struct hir_ty::db::ImplSelfTyQuery\">ImplSelfTyQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.ImplTraitQuery.html\" title=\"struct hir_ty::db::ImplTraitQuery\">ImplTraitQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.IncoherentInherentImplCratesQuery.html\" title=\"struct hir_ty::db::IncoherentInherentImplCratesQuery\">IncoherentInherentImplCratesQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InferQuery.html\" title=\"struct hir_ty::db::InferQuery\">InferQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InherentImplsInBlockQuery.html\" title=\"struct hir_ty::db::InherentImplsInBlockQuery\">InherentImplsInBlockQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InherentImplsInCrateQuery.html\" title=\"struct hir_ty::db::InherentImplsInCrateQuery\">InherentImplsInCrateQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InternCallableDefLookupQuery.html\" title=\"struct hir_ty::db::InternCallableDefLookupQuery\">InternCallableDefLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InternCallableDefQuery.html\" title=\"struct hir_ty::db::InternCallableDefQuery\">InternCallableDefQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InternClosureLookupQuery.html\" title=\"struct hir_ty::db::InternClosureLookupQuery\">InternClosureLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InternClosureQuery.html\" title=\"struct hir_ty::db::InternClosureQuery\">InternClosureQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InternCoroutineLookupQuery.html\" title=\"struct hir_ty::db::InternCoroutineLookupQuery\">InternCoroutineLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InternCoroutineQuery.html\" title=\"struct hir_ty::db::InternCoroutineQuery\">InternCoroutineQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InternImplTraitIdLookupQuery.html\" title=\"struct hir_ty::db::InternImplTraitIdLookupQuery\">InternImplTraitIdLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InternImplTraitIdQuery.html\" title=\"struct hir_ty::db::InternImplTraitIdQuery\">InternImplTraitIdQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InternLifetimeParamIdLookupQuery.html\" title=\"struct hir_ty::db::InternLifetimeParamIdLookupQuery\">InternLifetimeParamIdLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InternLifetimeParamIdQuery.html\" title=\"struct hir_ty::db::InternLifetimeParamIdQuery\">InternLifetimeParamIdQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InternTypeOrConstParamIdLookupQuery.html\" title=\"struct hir_ty::db::InternTypeOrConstParamIdLookupQuery\">InternTypeOrConstParamIdLookupQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.InternTypeOrConstParamIdQuery.html\" title=\"struct hir_ty::db::InternTypeOrConstParamIdQuery\">InternTypeOrConstParamIdQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.LayoutOfAdtQuery.html\" title=\"struct hir_ty::db::LayoutOfAdtQuery\">LayoutOfAdtQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.LayoutOfTyQuery.html\" title=\"struct hir_ty::db::LayoutOfTyQuery\">LayoutOfTyQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.LookupImplMethodQuery.html\" title=\"struct hir_ty::db::LookupImplMethodQuery\">LookupImplMethodQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.MirBodyForClosureQuery.html\" title=\"struct hir_ty::db::MirBodyForClosureQuery\">MirBodyForClosureQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.MirBodyQuery.html\" title=\"struct hir_ty::db::MirBodyQuery\">MirBodyQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.MonomorphizedMirBodyForClosureQuery.html\" title=\"struct hir_ty::db::MonomorphizedMirBodyForClosureQuery\">MonomorphizedMirBodyForClosureQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.MonomorphizedMirBodyQuery.html\" title=\"struct hir_ty::db::MonomorphizedMirBodyQuery\">MonomorphizedMirBodyQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.ProgramClausesForChalkEnvQuery.html\" title=\"struct hir_ty::db::ProgramClausesForChalkEnvQuery\">ProgramClausesForChalkEnvQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.ReturnTypeImplTraitsQuery.html\" title=\"struct hir_ty::db::ReturnTypeImplTraitsQuery\">ReturnTypeImplTraitsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.TargetDataLayoutQuery.html\" title=\"struct hir_ty::db::TargetDataLayoutQuery\">TargetDataLayoutQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.TraitDatumQuery.html\" title=\"struct hir_ty::db::TraitDatumQuery\">TraitDatumQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.TraitEnvironmentQuery.html\" title=\"struct hir_ty::db::TraitEnvironmentQuery\">TraitEnvironmentQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.TraitImplsInBlockQuery.html\" title=\"struct hir_ty::db::TraitImplsInBlockQuery\">TraitImplsInBlockQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.TraitImplsInCrateQuery.html\" title=\"struct hir_ty::db::TraitImplsInCrateQuery\">TraitImplsInCrateQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.TraitImplsInDepsQuery.html\" title=\"struct hir_ty::db::TraitImplsInDepsQuery\">TraitImplsInDepsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.TraitSolveQuery.html\" title=\"struct hir_ty::db::TraitSolveQuery\">TraitSolveQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.TyQuery.html\" title=\"struct hir_ty::db::TyQuery\">TyQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.TypeAliasImplTraitsQuery.html\" title=\"struct hir_ty::db::TypeAliasImplTraitsQuery\">TypeAliasImplTraitsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"hir_ty/db/struct.ValueTyQuery.html\" title=\"struct hir_ty::db::ValueTyQuery\">ValueTyQuery</a>"]]],["ide_db",[["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"ide_db/struct.LineIndexQuery.html\" title=\"struct ide_db::LineIndexQuery\">LineIndexQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"ide_db/symbol_index/struct.LibraryRootsQuery.html\" title=\"struct ide_db::symbol_index::LibraryRootsQuery\">LibraryRootsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"ide_db/symbol_index/struct.LibrarySymbolsQuery.html\" title=\"struct ide_db::symbol_index::LibrarySymbolsQuery\">LibrarySymbolsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"ide_db/symbol_index/struct.LocalRootsQuery.html\" title=\"struct ide_db::symbol_index::LocalRootsQuery\">LocalRootsQuery</a>"],["impl&lt;'d&gt; QueryDb&lt;'d&gt; for <a class=\"struct\" href=\"ide_db/symbol_index/struct.ModuleSymbolsQuery.html\" title=\"struct ide_db::symbol_index::ModuleSymbolsQuery\">ModuleSymbolsQuery</a>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[1585,14990,2595,10775,975]}