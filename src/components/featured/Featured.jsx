import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      {/* Üst kısım */}
      <div className="top">
        <h1 className="title">Toplam Gelir</h1>
        {/* Daha fazla seçenek ikonu */}
        <MoreVertIcon fontSize="small" />
      </div>

      {/* Alt kısım */}
      <div className="bottom">
        <div className="featuredChart">
          {/* Dairesel ilerleme çubuğu */}
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>

        {/* Toplam bugünkü satışlar başlığı */}
        <p className="title">Bugün Yapılan Toplam Satış</p>
        {/* Miktar */}
        <p className="amount">$420</p>
        {/* Açıklama */}
        <p className="desc">
          Önceki işlemler işleniyor. Son ödemeler dahil olmayabilir.
        </p>

        {/* Özet */}
        <div className="summary">
          {/* Hedef */}
          <div className="item">
            <div className="itemTitle">Hedef</div>
            {/* Negatif sonuç */}
            <div className="itemResult negative">
              {/* Aşağı ok ikonu */}
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>

          {/* Geçen Hafta */}
          <div className="item">
            <div className="itemTitle">Geçen Hafta</div>
            {/* Pozitif sonuç */}
            <div className="itemResult positive">
              {/* Yukarı ok ikonu */}
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>

          {/* Geçen Ay */}
          <div className="item">
            <div className="itemTitle">Geçen Ay</div>
            {/* Pozitif sonuç */}
            <div className="itemResult positive">
              {/* Yukarı ok ikonu */}
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
