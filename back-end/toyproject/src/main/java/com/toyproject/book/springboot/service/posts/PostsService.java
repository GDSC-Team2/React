package com.toyproject.book.springboot.service.posts;

import com.toyproject.book.springboot.domain.posts.Posts;
import com.toyproject.book.springboot.domain.posts.PostsRepository;
import com.toyproject.book.springboot.web.dto.PostsResponseDto;
import com.toyproject.book.springboot.web.dto.PostsSaveRequestDto;
import com.toyproject.book.springboot.web.dto.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// 트랜잭션, 도메인 기능 간의 순서 보장 영역
@RequiredArgsConstructor
@Service
public class PostsService {
    private final PostsRepository postsRepository;

    @Transactional
    public Long save(PostsSaveRequestDto requestDto) {  // 등록
        return postsRepository.save(requestDto.toEntity()).getId();
    }

    public PostsResponseDto findById (Long id) {  // 조회
        Posts entity = postsRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+ id));
        return new PostsResponseDto(entity);
    }

    @Transactional
    public Long update(Long id, PostsUpdateRequestDto requestDto){  // 수정
        Posts posts = postsRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+ id));
        posts.update(requestDto.getTitle(), requestDto.getDescription(), requestDto.getLink(), requestDto.getContact(),  requestDto.getDate(), requestDto.getPrice());
        return id;
    }

    @Transactional
    public void delete(Long id){   //삭제
        Posts posts = postsRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+ id));
        postsRepository.delete(posts);   //JpaRepository에서 제공하는 메소드
    }
}
