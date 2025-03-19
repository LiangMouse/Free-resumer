import { LogoGithub } from "@/components/common/SvgIcons";
// import
const EditHeader = () => {
  return (
    <div className="border-b-10 flex h-[52px] items-center justify-between border-b px-6">
      <a href="https://github.com/LiangMouse/Free-resumer" target="_blank" className="flex-center">
        <LogoGithub width={20} height={20} />
        <span className="ml-1 text-sm underline">Github</span>
      </a>
      <div className="flex-center gap-4">
        <button>导入配置</button>
        <button>导出配置</button>
        <button>重置</button>
      </div>

      <div className="flex-center gap-4">
        <button>预览</button>
        <button>打印</button>
      </div>
    </div>
  );
};

export { EditHeader };
