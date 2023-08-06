import { StatisticsContainer, StatisticsList } from "./Statistics.styled"

export const Statistics = ({ data }) => {
    return (
    <StatisticsContainer class="statistics">
        <h2 class="title">Upload stats</h2>

        <StatisticsList class="stat-list">
            <li class="item">
                <span class="label">.docx</span>
                <span class="percentage">{data[0].percentage}%</span>
            </li>
            <li class="item">
                <span class="label">.mp3</span>
                <span class="percentage">{data[1].percentage}%</span>
            </li>
            <li class="item">
                <span class="label">.pdf</span>
                <span class="percentage">{data[2].percentage}%</span>
            </li>
            <li class="item">
                <span class="label">.mp4</span>
                <span class="percentage">{data[3].percentage}%</span>
            </li>
        </StatisticsList>
    </StatisticsContainer>
    )
}