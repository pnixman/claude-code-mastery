#!/bin/bash

# Claude Code statusline 명령어
# 모델명 | 컨텍스트 사용량 | 비용 표시

# 기본값 설정
MODEL="${CLAUDE_MODEL:-claude-haiku-4-5}"
CONTEXT_TOKENS="${CLAUDE_CONTEXT_TOKENS:-0}"
INPUT_TOKENS="${CLAUDE_INPUT_TOKENS:-0}"
OUTPUT_TOKENS="${CLAUDE_OUTPUT_TOKENS:-0}"

# Haiku 4.5 가격 (1M tokens 기준)
INPUT_PRICE_PER_MTK=0.80
OUTPUT_PRICE_PER_MTK=4.00

# 비용 계산 (단위: 백만 tokens)
INPUT_COST=$(echo "scale=4; $INPUT_TOKENS * $INPUT_PRICE_PER_MTK / 1000000" | bc)
OUTPUT_COST=$(echo "scale=4; $OUTPUT_TOKENS * $OUTPUT_PRICE_PER_MTK / 1000000" | bc)
TOTAL_COST=$(echo "scale=4; $INPUT_COST + $OUTPUT_COST" | bc)

# 모델명 추출 (짧은 버전)
SHORT_MODEL=$(echo $MODEL | sed 's/claude-//')

# 출력
echo "$SHORT_MODEL | Ctx: $CONTEXT_TOKENS | \$$TOTAL_COST"
